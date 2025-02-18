---
title: "Query parameters"
draft: false
weight: 5
---

## Query parameters.
```zig
GET /query?id=1234&message=hello&message=world HTTP/1.1
```

1. Complete code.
```zig
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });
    defer z.deinit();

    var router = z.getRouter();
    try router.get("/query", queryParamters);

    try z.run();
}

fn queryParamters(ctx: *zinc.Context) anyerror!void {
    const id = try ctx.queryString("id");
    const messages = try ctx.queryValues("message");

    try ctx.json(.{
        .id = id,
        .message = .{ messages.items[0], messages.items[1] },
    }, .{});
}

```
response:
```
{
  "a": "1234",
  "b": [
    "hello",
    "world"
  ]
}
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples/tree/main/examples/serving-static-files).

