

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get logo () {
        return $('/html/body/div[1]/div/div[3]/nav/div/li/div[1]/span/img');
    }

    get welcomeTxt () {
        return $('/html/body/div[1]/div/div[3]/div/div[2]/div/div/div[1]/h1');
    }

    get wrongPass (){
        return $('/html/body/div[1]/div');
    }
}

module.exports = new SecurePage();
