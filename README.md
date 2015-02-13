# isup

With isup you can easily check if a website is up or down.

## Getting started
First, you need to install:

```shell
npm install -g isup
```

Then, you can use it both from the command line and as a module.

### cli
```shell
isup github.com

// github.com is up
// github.com is down
````

### Node.js
Note: when using that as a module, it's better to install it locally and also use the '--save' flag.

```js
var isup = require('isup');

var url = 'github.com';

isup(url)
    .then(function(result) {
        var upOrDown = result === true ? 'up' : 'down';
        console.log(url + ' is ' + upOrDown);
    })
    .catch(function(error) {
        console.error(error.toString());
    });
```

#### Enjoy!
