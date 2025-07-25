const HomePage = require('../pageobjects/homePage.page');
const ViewsPage = require('../pageobjects/views.page');
const AppUtils = require('../utils/appUtils');
const apps = require('../config/apps.config'); // Import app IDs



describe('Scroll', () => {
    beforeEach(async () => {
       await AppUtils.openApp(apps.androidApis);
       await HomePage.openViewsMenu();
    });

    it('should do fast vertical scroll', async () => {                
        await AppUtils.fastScroll();
        expect(await ViewsPage.tabs).toBeDisplayed();
        await ViewsPage.tabs.click();
    });

    it('should do horizontal scroll', async () => {
        await ViewsPage.openGalleryMenu();
        await ViewsPage.openPhotosMenu();
        await AppUtils.doHorizontalScroll();
    });

    afterEach(async () => {
        await AppUtils.closeApp(apps.androidApis);
    });
});