# express-flash-2

This middleware is based on `connect-flash`. I simplify it and rewite the tests with `Mocha` and `Chai`.

* use `res.flash()` instead of `req.flash()`;
* res.flash() just for writing messages into the sesson;
* all flash messages will be copied to `res.req.session.flash` automatically.

## Install

    $ npm install express-flash-2

## Usage

#### Express 4.x

Flash messages are stored in the session.  First, setup sessions as usual by
enabling `cookieParser` and `session` middleware.  Then, use `flash` middleware
provided by express-flash-2.

```javascript
var flash = require('express-flash-2');
var app = express();

app.configure(function() {
  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());
});
```

With the `flash` middleware in place, all requests will have a `res.flash()` function
that can be used for flash messages.

```javascript
app.get('/flash', function(req, res){
  // Set a flash message by passing the key, followed by the value, to res.flash().
  res.flash('info', 'Flash is back!')
  res.redirect('/');
});
```

## Examples

For an example using connect-flash in an Express 4.x app, refer to the [express4](https://github.com/jaredhanson/connect-flash/tree/master/examples/express3)
example.

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/connect-flash.png)](http://travis-ci.org/jaredhanson/connect-flash)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)
  - [TJ Holowaychuk](https://github.com/visionmedia)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
