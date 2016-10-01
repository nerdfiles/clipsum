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

[travisimg]: https://api.travis-ci.org/nerdfiles/clipsum.svg
[travis]: https://travis-ci.org/nerdfiles/clipsum
[jsonplaceholder]: http://jsonplaceholder.typicode.com/
