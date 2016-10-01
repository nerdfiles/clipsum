/**(
 * @fileOverview ./src/cli.js
 * @description
 * Command-line interface.
 * )
 */

'use strict'

let cli = __parser__(function () {/*!
Usage:
  lorem all
  lorem get <id>
  lorem -h | --help
  lorem --version
*/});

function __parser__ (f) {
  /// @inner
  /// @description
  /// Simple comment-based usage document parser.

  return f.toString().
    replace(/^[^\/]+\/\*!?/, '').
    replace(/\*\/[^\/]+$/, '');
}

module.exports = cli
