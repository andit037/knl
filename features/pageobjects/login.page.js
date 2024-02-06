const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    inputEmail(email) {
        return $(`input[placeholder=${email}]`);
    }

    inputPassword(password) {
        return $(`input[placeholder=${password}]`);
    }

    radioButtonDeposan(text) {
        return $(`//div/label[contains(text(), ${text} )]`);
    }

    radioButtonAdminBpr(text) {
        return $(`//div/label[contains(text(), ${text} )]`);
    }

    buttonMasuk(text) {
        return $(`//button[contains(text(), ${text} )]`);
    }

    buttonLupaKataSandi(text) {
        return $(`//p/a[contains(text(),${text})]`);
    }

    buttonDaftarSekarang(text) {
        return $(`//button[contains(text(), ${text} )]`);
    }

    get masukButton(){
        return $('button[type="submit"]')
    }

    get errorMessagesEmail(){
        return $('//div/input[@type="email"]/following-sibling::div/div')
    }

    get errorMessagesPassword(){
        return $('//div/input[@type="password"]//parent::div/following-sibling::div/div')
    }

    get popUperrorMessages(){
        return $('//app-alert/div/div/span')
    }

    get headerLupaPassword(){
        return $('//div[@class="card-body"]/h3')
    }

    get headerDaftarSebagai(){
        return $('//div/h3[contains(text(),"Daftar Sebagai")]')
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async register (username,password) {
        (await this.inputEmail(`"Masukkan Alamat Email"`)).setValue(username);
        (await this.inputEmail(`"Masukkan Kata Sandi"`)).setValue(password);
    }


    async clickMasuk () {
        await this.masukButton.click();
    }

    async enableRadioButtonBprAdmin () {
        await this.radioButtonAdminBpr(`"Admin BPR"`).click();
    }

    async enableRadioButtonDeposan () {
        await this.radioButtonAdminBpr(`"Deposan"`).click();
    }

    async clickLupaPassword () {
        await this.buttonLupaKataSandi(`"Lupa Kata Sandi?"`).click();
    }

    async clickDaftarSekarang () {
        await this.buttonDaftarSekarang(`"Daftar Sekarang"`).click();
    }
}

module.exports = new LoginPage();
