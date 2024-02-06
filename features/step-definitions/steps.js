const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const chai = require('chai');
const expectChai = chai.expect;

const LoginPage = require('../pageobjects/login.page');



Given(/^I am on the homepage$/, async() => {
	await browser.url(`https://user.depositobpr.id/`);
    await browser.pause(5000);
});


When(/^I see (.*) on email field$/, async (email) => {
	await expect(LoginPage.inputEmail(email)).toBeExisting();
});


When(/^I see (.*) on password field$/, async (password) => {
	await expect(LoginPage.inputPassword(password)).toBeExisting();
});

When(/^I see (.*) on deposan lender$/, async (deposan_lender) => {
	await expect(LoginPage.radioButtonDeposan(deposan_lender)).toBeExisting();
});

When(/^I see (.*) on deposan adminbpr$/, async (adminBpr_lender) => {
    await expect(LoginPage.radioButtonAdminBpr(adminBpr_lender)).toBeExisting();
});

When(/^I see (.*) on signin button$/, async (masuk) => {
	await expect(LoginPage.buttonMasuk(masuk)).toBeExisting();
});

When(/^I see (.*) on forgot password button$/, async (lupaKataSandi) => {
	await expect(LoginPage.buttonLupaKataSandi(lupaKataSandi)).toBeExisting();
});

When(/^I see (.*) on register now button$/, async (daftarSekarang) => {
	await expect(LoginPage.buttonDaftarSekarang(daftarSekarang)).toBeExisting();
});


When(/^I insert (.*) and (.*) of mandatory field on homepage$/, async(username,password) => {
	await LoginPage.register(username,password);
});


When(/^I submit data login$/, async () => {
	await LoginPage.clickMasuk();
});


Then(/^I see (.*) and (.*) and (.*) on mandatory field$/, async(error_messages1,error_messages2,error_messages3) => {
    
    if (await LoginPage.errorMessagesEmail.isExisting()){
	    await expect(LoginPage.errorMessagesEmail).toBeExisting();
        await expect(LoginPage.errorMessagesEmail).toHaveText(error_messages1);
    }

    if (await LoginPage.errorMessagesPassword.isExisting()){
        await expect(LoginPage.errorMessagesPassword).toBeExisting();
        await expect(LoginPage.errorMessagesPassword).toHaveText(error_messages2);
    }

    if (await LoginPage.popUperrorMessages.isExisting()){
        await expect(LoginPage.popUperrorMessages).toBeExisting();
        await expect(LoginPage.popUperrorMessages).toHaveText(error_messages3);
    }
});



When(/^I activated admin-Bpr$/, async() => {
	await LoginPage.enableRadioButtonBprAdmin();
});



When(/^I forgot password$/, async() => {
	await LoginPage.clickLupaPassword();
});


Then(/^I redirected to forgot password page and see (.*) of header$/, async(text) => {
	await expect(LoginPage.headerLupaPassword).toBeExisting();
    await expect(LoginPage.headerLupaPassword).toHaveText(text);
    //expectChai(await browser.getUrl()).to.include('/forgot-password')
});


When(/^I activated deposan$/, async() => {
	await LoginPage.enableRadioButtonDeposan();
});

When(/^I select daftar sekarang$/, async() => {
	await LoginPage.clickDaftarSekarang();
});


Then(/^I redirected to register page and see (.*) on url-link$/, async(text) => {
    await (await LoginPage.headerDaftarSebagai).waitForDisplayed(5000)
	expectChai(await browser.getUrl()).to.include(text)
});

