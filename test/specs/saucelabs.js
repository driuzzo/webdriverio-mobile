const HomePage = require('../pageobjects/saucelabs.page');
const AppUtils = require('../utils/appUtils');
const apps = require('../config/apps.config');

describe('suite', () => {
    beforeEach(async () => {    
        await AppUtils.openApp(apps.saucelabsDemo);
    });
    it('should display Products text on HomePage', async () => {     
            expect(await HomePage.products).toHaveText('Products');
        });
});