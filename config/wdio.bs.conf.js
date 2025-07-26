require('dotenv').config();

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        //app: 'bs://64f11b62079534c89e86df8943c4327ad13ce8ba',
        buildIdentifier: "12.0",
        browserstackLocal: true
      },
    ]
  ],
  capabilities: [{
    'bstack:options': {
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
      app: process.env.BROWSERSTACK_APP_ID,
      projectName: "BrowserStack Samples",
      buildName: 'browserstack build',
      sessionName: 'BStack parallel webdriverio-appium',
      debug: true,
      networkLogs: true
    },
  },
  maxInstances: 10,
}