
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./classnames-clone.cjs.production.min.js')
} else {
  module.exports = require('./classnames-clone.cjs.development.js')
}
