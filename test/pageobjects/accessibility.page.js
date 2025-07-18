class AccessibilityPage {
    get menuItems(){
        return $$('android.widget.TextView');
    }

    get nodeProvider() {
        return $('~Accessibility Node Provider');
    }

    get service() {
        return $('//android.widget.TextView[@content-desc="Accessibility Service"]');
    }

    async openAccessibilityService() {
        await this.service.click();
    }
}

module.exports = new AccessibilityPage();