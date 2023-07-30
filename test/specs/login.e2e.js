const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const inventoryPage = require('../pageobjects/inventory.page')

describe('jubelio Login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('qa.rakamin.jubelio@gmail.com', 'Jubelio123!')
        await expect(SecurePage.logo).toBeExisting()
        await expect(SecurePage.welcomeTxt).toHaveTextContaining('Selamat Datang')
    })

    it('should login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('qa.rakamin.jubelio@gmail.com', 'Jubelio1234')
        await expect(SecurePage.wrongPass).toHaveTextContaining('Password atau email anda salah.')
    })

    
     
})

describe('jubelio add stock Inventory', () => {
    it('should add stock', async () => {
        await LoginPage.open()

        await LoginPage.login('qa.rakamin.jubelio@gmail.com', 'Jubelio123!')
        await expect(SecurePage.logo).toBeExisting()
        await expect(SecurePage.welcomeTxt).toHaveTextContaining('Selamat Datang')

        await inventoryPage.barang.click()
        await inventoryPage.persediaan.click()
        await inventoryPage.persediaan.click()

        await inventoryPage.ckList.click()
        await inventoryPage.btnUpStock.click()

        await inventoryPage.txtKet.setValue('menambah 5 stock')
        await inventoryPage.txtStock.doubleClick()
        await inventoryPage.txtStockinput.setValue(5)

    })
})
