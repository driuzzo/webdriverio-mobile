const HomePage = require('../pageobjects/homePage.page');
const ViewsPage = require('../pageobjects/views.page');
const AppUtils = require('../utils/appUtils');

describe('Scroll', () => {
    beforeEach(async () => {
       await AppUtils.openApp('io.appium.android.apis');
       await HomePage.openViewsMenu();
    });

    it.only('test', async () => {                
        await AppUtils.fastScroll();
        expect(await ViewsPage.tabs).toBeDisplayed();
        await ViewsPage.tabs.click();
    });

    it('test2', async () => {
        await ViewsPage.openGalleryMenu();
        await ViewsPage.openPhotosMenu();
        await AppUtils.doHorizontalScroll();
    });

    afterEach(async () => {
        await AppUtils.closeApp('io.appium.android.apis');
    });
});