import { getTextElementsFromList } from '../utils/appUtils';

class HomePage {
    get accessibilityButton() {
        return $('~Accessibility');
    }

    get appButton() {
        return $('~App');
    }

    get viewsButton() {
        return $('~Views');
    }

    get viewsButton() {
        return $('~Views');
    }

    async openAccessibilityMenu() {
        await this.accessibilityButton.click();
    }

    async openAppMenu() {
        await this.appButton.click();
    }
    async openViewsMenu() {
        await this.viewsButton.click();
    }
    
    async getAllMenuItems(list) {
        return getTextElementsFromList(list)        
    }
}

module.exports = new HomePage();