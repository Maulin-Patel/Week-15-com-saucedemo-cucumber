package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "user-name")
    WebElement login;
    @CacheLookup
    @FindBy(name = "password")
    WebElement password;
    @CacheLookup
    @FindBy(name = "login-button")
    WebElement loginButton;

    public void enterLoginId() {
        log.info("Enter email ID" + login.toString());
        sendTextToElement(login, "standard_user");
    }

    public void enterPassword() {
        log.info("Enter Password " + password.toString());
        sendTextToElement(password, "secret_sauce");
    }

    public void clickOnLoginButton() {
        log.info("Click on Login Button " + loginButton.toString());
        clickOnElement(loginButton);
    }
}
