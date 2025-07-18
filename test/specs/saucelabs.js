const HomePage = require('../pageobjects/saucelabs.page');
const AppUtils = require('../utils/appUtils');

describe('suite', () => {
    beforeEach(async () => {    
        await AppUtils.openApp('com.saucelabs.mydemoapp.android');
    });
    it('test', async () => {     
            expect(await HomePage.products).toHaveText('Products');
        });
});