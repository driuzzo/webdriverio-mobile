module.exports = {
    async getTextElementsFromList(menuList) {
        const list = []
        for (item of await menuList) {
            list.push(await item.getText());
        }
        console.log(list);
    },
    
    async slowScrollToText(text) {
        return await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("~${text}")`);
    },
    async fastScroll() {
        return await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');
    },
    async doHorizontalScroll() {
        return await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(2)');
    },
    async openApp(appID) {
        await driver.activateApp(appID);
    },
    async closeApp(appID) {
        await driver.terminateApp(appID);
    }
}