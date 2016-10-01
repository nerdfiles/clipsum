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
let fs = require('fs')
let request = require('request')

let host

function __host__ () {

  let def = defer()

  fs.readFile(__dirname + '/../host.json', 'utf-8', function (error, data) {
    if (error)  throw error
    host = JSON.parse(data)
    def.resolve(host)
  })

  return def.promise
}

function __cli__ (config) {

  let API = {

    all (contenttype) {
      let ct = contenttype || 'posts'
      this.request(ct).then(function (result) {
        console.log(result)
      }, function (error, result) {
        console.log(result)
      })
    },

    get (contenttype, id) {
      let ct = contenttype || 'posts'
      let $$id = id || 1
      let requestString = ct + '/' + $$id

      if (ct === 'post_comments') {
        requestString = `posts/${$$id}/comments`
      }

      if (ct === 'comments') {
        requestString = ct + '?postId=' + $$id
      }

      if (ct === 'posts_by_user') {
        requestString = 'posts?userId=' + $$id
      }

      this.request(requestString).then(function (result) {
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

  __host__().then(function (hostConfig) {
    API.baseUrl = hostConfig.default
  }).then(function () {
    if (config['all']) {
        API.all(config['<contenttype>'])
    } else if (config['get']) {
        let config_id = null
        if (!config['<id>']) {
          config_id = 1
        } else {
          config_id = config['<id>']
        }
        API.get(config['<contenttype>'], config_id)
    } else {
      console.log('No command provided.')
    }
  })

}


let initConfig = docopt.docopt(cli, { version: '0.0.1' })
module.exports = __cli__(initConfig)
