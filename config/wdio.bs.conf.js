require('dotenv').config();

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        //app: process.env.BROWSERSTACK_APP_ID,
        buildIdentifier: "12.0",
        browserstackLocal: true
      },
    ]
  ],
  capabilities: [{
    app: process.env.BROWSERSTACK_APP_ID,
    'bstack:options': {
      //app: process.env.BROWSERSTACK_APP_ID,
      deviceName: 'Xiaomi Redmi Note 11',
      platformVersion: '11.0',
      platformName: 'android',
    }
  // }, {
  //   'bstack:options': {
  //     deviceName: 'Samsung Galaxy S20',
  //     platformVersion: '10.0',
  //     platformName: 'android',
  //   }
  // }, {
  //   'bstack:options': {
  //     deviceName: 'Google Pixel 8',
  //     platformVersion: '14.0',
  //     platformName: 'android',
  //   },
  }],
  commonCapabilities: {
    'bstack:options': {
      projectName: "BrowserStack Samples",
      buildName: 'browserstack build',
      sessionName: 'BStack parallel webdriverio-appium',
      debug: true,
      networkLogs: true
    },
  },
  maxInstances: 10,
}