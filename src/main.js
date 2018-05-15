var db = require('./DBClient.js'),
    S = require('string'),
    args = require('node-getopt').create([
        ['', 'userName[=ARG]', "(Optional) optional DB userName"],
        ['', 'password[=ARG]', "(Optional) optional DB userName"],
        ['', 'host[=HOST]', "(Optional) DB host. Default value is 'localhost'"],
        ['h', 'help', 'shows help']
    ])
        .bindHelp()
        .parseSystem();

var userName = args.options.userName || '',
    password = args.options.password || '',
    host = args.options.host || 'localhost';

db.dbOperation(host, userName, password);