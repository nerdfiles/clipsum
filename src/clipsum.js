/**(
 * @fileOverview ./src/clipsum.js
 * @description
 * Lorem ipsum grabber.
 * )
 */

'use strict'

let cli = require('./cli')
let docopt = require('docopt-js')
let defer = require('promise-defer')
let request = require('request')

function __cli__ (config) {
  let API = {
    baseUrl: 'http://jsonplaceholder.typicode.com/',

    all () {
      this.request('posts').then(function (result) {
        console.log(result)
      }, function (error, result) {
        console.log(result)
      })

    },

    get (id) {
      this.request('posts/' + id).then(function (result) {
        console.log(result)
      }, function (error, result) {
        console.log(result)
      })
    },

    request (resource) {
      let def = defer()
      let content = ''

      request.get(this.baseUrl + resource)
        .on('error', function (error) {
          def.reject(error.message)
        })
        .on('data', function (chunk) {
          content += chunk
        })
        .on('end', function () {
          let result = JSON.parse(content)
          def.resolve(result)
        })

      return def.promise
    }
  }

  if (config['all']) {
      API.all()
  } else if (config['get']) {
      API.get(config['<id>'])
  } else
    console.log('No command provided.')

}

let initConfig = docopt.docopt(cli, { version: '0.0.1' })
module.exports = __cli__(initConfig)

