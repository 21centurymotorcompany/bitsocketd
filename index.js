const bit = require("./bit")
const socket = require("./socket")
const init = function(config) {

  // Cconnection pool init
  const connections = { pool: {} }

  // Bitdb Consumer Init
  let b = (config && config.bit ? Object.assign({}, config.bit) : {})
  b.connections = connections
  bit.init(b)

  // SSE Producer Init
  let s = (config && config.socket ? Object.assign({}, config.socket) : {})
  s.connections = connections
  socket.init(s)

}
module.exports = { init: init }
