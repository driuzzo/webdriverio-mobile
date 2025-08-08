class ViewPage {
    get webView() {
        return $('~WebView');
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
    async openWebViewMenu() {
        return await this.webView.click();
    }
}

module.exports = new ViewPage();