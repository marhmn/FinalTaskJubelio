

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get barang () {
        return $('/html/body/div[1]/div/div[3]/nav/div/div/ul/li[2]/a');
    }

    get persediaan () {
        return $('/html/body/div[1]/div/div[3]/nav/div/div/ul/li[2]/ul/li[2]/a/span');
    }

    get txtSearch () {
        return $('/html/body/div[1]/div/div[3]/div/div[3]/div/div/div/div[2]/div/div/div/div/div/div[1]/div[1]/div');
    }

    get btnSrch (){
        return $('#page-wrapper > div.wrapper.wrapper-content > div > div > div > div:nth-child(2) > div > div > div > div > div > div.row > div.col-sm-6.col-lg-4 > div > span:nth-child(4) > button');
    }

    get ckList(){
        return $('#page-wrapper > div.wrapper.wrapper-content > div > div > div > div:nth-child(2) > div > div > div > div > div > div:nth-child(2) > div > div > div.react-grid-Container > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(14) > div > div.rdg-row-actions-cell.react-grid-Cell.react-grid-Cell--frozen > div > div > span > div > label')
    }

    get btnUpStock(){
        return $('/html/body/div[1]/div/div[3]/div/div[3]/div/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/button[2]')
    }

    get txtStock (){
        return $('//*[@id="page-wrapper"]/div[3]/div/div/div/div[2]/div/div/div/div/div[1]/div/div[2]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div[2]/div[1]/div/div[2]');
    }
    get txtStockinput (){
        return $('/html/body/div[6]/div/input');
    }

    get clicklokasi(){
        return $('//*[@id="page-wrapper"]/div[3]/div/div/div/div[2]/div/div/div/div/div[1]/div/div[1]/div[2]/div[3]/div/div/div/input');
    }

    get lokasi(){
        return $('//*[@id="page-wrapper"]/div[3]/div/div/div/div[2]/div/div/div/div/div[1]/div/div[1]/div[2]/div[3]/div/div/div[2]/div[2]/div[1]');
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
