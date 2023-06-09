package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//span[@class='title']")
    WebElement getProductsText;
    @CacheLookup
    @FindBy(className = "inventory_item")
    List<WebElement> getProductQty;


    public String verifyTextProducts() {
        log.info("Get Text Product " + getProductsText.toString());
        return getTextFromElement(getProductsText);
    }

    public int verifyTotalProductOfNumber() {
        List<WebElement> actualElement = getProductQty;
        int actualQty = actualElement.size();
        log.info("Get Product Qty " + getProductsText.toString());
        return actualQty;
    }
}
