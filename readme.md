# Clipsum (JSON)

[![Build Status][travisimg]][travis]

    Usage:

      clipsum all <contenttype>       #defaults to 'posts'
      clipsum get <contenttype> <id>  #defaults to 'posts'
      clipsum -h | --help
      clipsum --version

    Examples:

      node index.js get comments 2
      node index.js all todos
      node index.js get posts_by_user 69

## jsonplaceholder.typicode.com

    Expect:
      /posts    100 items
      /comments 500 items
      /albums   100 items
      /photos   5000 items
      /todos    200 items
      /users    10 items

[See more][jsonplaceholder]...

## Use `json-server`

    $ npm install -g json-server
    $ json-server --watch db.json

### Reconfigure `host.json`

After you've installed `json-server` and updated `db.json`, configure your 
`host.json` file to point to the prepared `json-server` base endpoint.

[See more][jsonserver]...

[travisimg]: https://api.travis-ci.org/nerdfiles/clipsum.svg
[travis]: https://travis-ci.org/nerdfiles/clipsum
[jsonplaceholder]: http://jsonplaceholder.typicode.com/
[jsonserver]: https://github.com/typicode/json-server
