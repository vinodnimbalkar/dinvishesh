
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dinvishesh.cjs.production.min.js')
} else {
  module.exports = require('./dinvishesh.cjs.development.js')
}
