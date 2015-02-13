#!/usr/bin/env node
'use strict';

var commander = require('commander');

var pkg = require('../package.json');
var isup = require('../lib/isup');

process.title = 'isUp';

commander
    .version(pkg.version)
    .usage('[url] [options]')
    .parse(process.argv);

if (!commander.args.length) {
    commander.outputHelp();
    process.exit();
}

var url = commander.args[0];

isup(url)
    .then(function(result) {
        var upOrDown = result === true ? 'up' : 'down';
        process.stdout.write(url + ' is ' + upOrDown  + '\n');
    })
    .catch(function(error) {
        process.stderr.write(error.toString() + '\n');
    });
