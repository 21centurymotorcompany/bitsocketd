# bitsocketd

message bus for bitcoin

# Prerequisites

bitsocketd has a dependency on bitdb.

[Install bitd](https://docs.bitdb.network/docs/install)

# Install

```
npm install --save bitsocketd
```

# Usage

## 1. Basic

If you already have BitDB running on port 28339, you can simply do this:

```
const bitsocketd = require('bitsocketd')
bitsocketd.init()
```

You will see a screen like this:

![init](img/bitsocket_init.png)

Now open your browser to the socket URL and you'll see SSE pouring in.

![browser](img/raw.gif)

That's the raw firehose. You probably don't want to consume the whole thing, so make sure to add a bitquery filter. Learn more at [https://bitsocket.org/docs](https://bitsocket.org/docs)

## 2. Custom BitDB node

You can specify the Zeromq subscriber from a bitdb node, like this:

```
const bitsocketd = require('bitsocketd')
bitsocketd.init({
  bit: { host: "127.0.0.1", port: 28339 },
})
```

By default Bitdb's zeromq publisher broadcasts to [port 28339](https://github.com/21centurymotorcompany/bitd/blob/master/config.js#L44), but you can customize if you want.


## 3. Custom SSE port

By default, the SSE port is automatically 3001. You can customize this:

```
const bitsocketd = require('bitsocketd')
bitsocketd.init({
  socket: { port: 3001 }
})
```

## 4. Use an existing express.js server

```
// Step 1. express.js web server init
const express = require("express")
const app = express()
app.listen(3000 , function () {
  console.log("web server listening at " + port)
})

// Step 2. pass the express server to bitsocketd
const bitsocketd = require('bitsocketd')
bitsocketd.init({
  socket: { app: app }
})
```
