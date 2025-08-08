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
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(),  '\\app\\app-debug.apk'),
        //'appium:chromedriverExecutable': '\\chromedriver-mobile\\chromedriver.exe',
        //'appium:chromedriverAutoDownload': true,
    }]

exports.config = config;

// uploaded app to browserstack
// bs://64f11b62079534c89e86df8943c4327ad13ce8ba