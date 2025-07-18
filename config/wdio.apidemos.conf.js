const path = require('path');
const { config } = require('./wdio.shared.conf');

config.port=4723
specs= [
        './test/specs/**/*.js'
    ]

capabilities= [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        //browserName: 'Chrome',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(),  '\\app\\ApiDemos-debug.apk'),
    }]

exports.config = config;

// uploaded app to browserstack
// bs://64f11b62079534c89e86df8943c4327ad13ce8ba