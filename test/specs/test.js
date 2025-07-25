const HomePage = require('../pageobjects/homePage.page');
const AccessibilityPage = require('../pageobjects/accessibility.page');
const AppPage = require('../pageobjects/app.page');
const AppUtils = require('../utils/appUtils');
const apps = require('../config/apps.config');

describe('suite', () => {
    /*beforeEach(async () => {    
        await AppUtils.openApp(apps.androidApis);
    });*/

    it('test', async () => {
        await HomePage.openAccessibilityMenu();        
        await HomePage.getAllMenuItems(AccessibilityPage.menuItems);        
        expect(await AccessibilityPage.nodeProvider).toBeDisplayed();
        await AccessibilityPage.openAccessibilityService();
        await driver.back();
        expect(await AccessibilityPage.nodeProvider).toBeDisplayed();
    });

    it('test2', async () => {        
        await HomePage.openAppMenu();
        // await AppUtils.fastScroll();
        expect(await AppPage.search).toBeDisplayed();
        await AppPage.openSearch();
        await AppPage.openInvokeSearch();
        await AppPage.fillPerfilQuery('Hello World');
        expect(await AppPage.perfilQueryTextInput.getText()).toBe('Hello World');    
    });

    /*afterEach(async () => {
        await AppUtils.closeApp(apps.androidApis);
    });*/
});
