

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#root > div > div > div.container.main-box.shadow.rad10 > div > div.col-md-4.right-column > div > form > div:nth-child(1) > div > input');
    }

    get inputPassword () {
        return $('//*[@id="root"]/div/div/div[1]/div/div[2]/div/form/div[2]/div/input');
    }

    get btnSubmit () {
        return $('//*[@id="root"]/div/div/div[1]/div/div[2]/div/form/button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
