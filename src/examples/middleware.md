---
title: "Middleware"
draft: false
weight: 3
---

## Middleware

```zig
const zinc = @import("zinc");
const std = @import("std");
pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });
    defer z.deinit();

    // Middlwares are executed in the order they are added
    try z.use(&.{ logger, logger2, logger3, logger4 });

    var router = z.getRouter();
    try router.get("/", helloWorld);

    try z.run();
}

fn helloWorld(ctx: *zinc.Context) anyerror!void {
    std.debug.print("Hello, World!\n", .{});
    try ctx.text("Hello, World!", .{});
}
fn logger(ctx: *zinc.Context) anyerror!void {
    const t = std.time.microTimestamp();
    std.debug.print("logger1\n", .{});
    std.time.sleep(1);
    // before request
    try ctx.next();
    // after request
    const latency = std.time.microTimestamp() - t;
    std.debug.print("Done all. latency: {}\n", .{latency});
}
fn logger2(ctx: *zinc.Context) anyerror!void {
    std.debug.print("logger2\n", .{});
    try ctx.json(.{ .message = "logger2" }, .{});
    try ctx.next();
}
fn logger3(ctx: *zinc.Context) anyerror!void {
    std.debug.print("logger3\n", .{});
    // Invoke next handler (logger4) in the chain.
    try ctx.next();
    // This line is executed after the next handler in the chain.
    std.debug.print("logger3 done.\n", .{});
}
fn logger4(ctx: *zinc.Context) anyerror!void {
    std.debug.print("logger4\n", .{});
    try ctx.html("<h1>logger4<h1>", .{});
    // Invoke the last handler (helloWorld) in the chain.
    try ctx.next();
}
```

Open the browse and access http://127.0.0.1:8080/, you will see the web page like that below.
```text
{"message":"logger2"}<h1>logger4<h1>Hello, World!
```
And you will see the output in the console.
```console
logger1
logger2
logger3
logger4
Hello, World!
logger3 done.
Done all. latency: 131
```