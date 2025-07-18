class AppPage {
  get app() {
    return $('~App');
  }

  get search() {
    return $('~Search');
  }

  get invokeSearch() {
    return $('~Invoke Search');
  }

  get perfilQueryTextInput() {
    return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/txt_query_prefill"]');
  }

  async openSearch() {
    await this.search.click();
  }

  async openInvokeSearch() {
    await this.invokeSearch.click();
  }

  async fillPerfilQuery(value) {
    await this.perfilQueryTextInput.setValue(value);  
  }
}

module.exports = new AppPage();