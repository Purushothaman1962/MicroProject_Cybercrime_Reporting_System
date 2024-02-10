package com.crs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class TestLogin {

	@Test
	public void performLogin() {
		WebDriver driver;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");


		driver.findElement(By.name("login")).click();
		System.out.println(driver.getTitle());
		
		driver.findElement(By.name("userName")).sendKeys("Shiva");
		driver.findElement(By.name("password")).sendKeys("shiva@123");
		driver.findElement(By.name("login")).click();
		System.out.println(driver.getTitle());
		
	}
	
	public static void main(String[] args) {

		TestLogin obj = new TestLogin();
		obj.performLogin();

	}
}
