/**(
 * @fileOverview ./src/cli.js
 * @description
 * Command-line interface.
 * )
 */

'use strict'

let cli = __parser__(function () {/*!
Usage:
  clipsum all <contenttype>
  clipsum get <contenttype> [<id>]
  clipsum -h | --help
  clipsum --version
*/})

function __parser__ (f) {
  /// @name __parser__
  /// @description
  /// Simple comment-based usage document parser.

  return f.toString().
    replace(/^[^\/]+\/\*!?/, '').
    replace(/\*\/[^\/]+$/, '')
}

module.exports = cli
