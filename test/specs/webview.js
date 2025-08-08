const HomePage = require('../pageobjects/homePage.page');
const AppUtils = require('../utils/appUtils');
const apps = require('../config/apps.config');
const ViewPage = require('../pageobjects/views.page');

describe('webview suite', () => {
    beforeEach(async () => {    
        await AppUtils.openApp(apps.androidApis);
    });

    it('webview', async () => {
        await HomePage.openViewsMenu();        
        await AppUtils.fastScroll();        
        expect(await ViewPage.webView).toBeDisplayed();
        await ViewPage.openWebViewMenu();
        console.log('Getting context 1',await driver.getContext());
        await $('android=new UiSelector().text("i am a link")').click();
        await driver.switchContext('WEBVIEW_io.appium.android.apis');
        console.log('Getting context 2', await driver.getContext());
        expect (await $('//android.widget.TextView[@text="I am some other page content"]')).toBeDisplayed();
        await driver.back();
        await driver.switchContext('NATIVE_APP');
        console.log('Getting context 3', await driver.getContext());
    });
    
    afterEach(async () => {
        await AppUtils.closeApp(apps.androidApis);
    });
});
