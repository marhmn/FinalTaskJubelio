

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get barang () {
        return $('/html/body/div[1]/div/div[3]/nav/div/div/ul/li[2]/a');
    }

    get persediaan () {
        return $('/html/body/div[1]/div/div[3]/nav/div/div/ul/li[2]/ul/li[2]/a/span');
    }

    get search () {
        return $('/html/body/div[1]/div/div[3]/div/div[3]/div/div/div/div[2]/div/div/div/div/div/div[1]/div[1]/div/input');
    }

    get btnSrch (){
        return $('/html/body/div[1]/div/div[3]/div/div[3]/div/div/div/div[2]/div/div/div/div/div/div[1]/div[1]/div/span[3]/button[2]');
    }

    get ckList(){
        return $('/html/body/div[1]/div/div[3]/div/div[3]/div/div/div/div[2]/div/div/div/div/div/div[2]/div/div/div[3]/div/div/div[2]/div/div/div[2]/div[1]/div/div[6]/div/div/span/div/input')
    }

    get btnUpStock(){
        return $('/html/body/div[1]/div/div[3]/div/div[3]/div/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/button[2]')
    }

    get txtStock (){
        return $('/html/body/div[6]/div/input');
    }

    get lokasi(){
        return $('/html/body/div[1]/div/div[3]/div/div[3]/div/div/div/div[2]/div/div/div/div/div[1]/div/div[1]/div[2]/div[3]/div/div/div/div');
    }

    get txtKet(){
        return $('/html/body/div[1]/div/div[3]/div/div[3]/div/div/div/div[2]/div/div/div/div/div[1]/div/div[1]/div[1]/div[1]/div/textarea');
    }

    get btnSimpan(){
        return $('/html/body/div[1]/div/div[3]/div/div[3]/div/div/div/div[2]/div/div/div/div/div[3]/div/button');
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new InventoryPage();
