class ViewPage {
    get webView() {
        return $('android.widget.TextView[contains(@text, "WebView")]');
    }
    get gallery() {
        return $('~Gallery');
    }
    get photos() {
        return $('~1. Photos');
    }
    get tabs() {
        return $('~Tabs');
    }
    async openGalleryMenu() {
        return await this.gallery.click();
    }
    async openPhotosMenu() {
        return await this.photos.click();
    }
}

module.exports = new ViewPage();