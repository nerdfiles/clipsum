/**(
 * @fileOverview ./index.js
 * @description
 * Promise-ified loader.
 * )
 */

'use strict'

Promise = require('bluebird')

let clipsum = require('./src/clipsum')
Promise.resolve(clipsum)
