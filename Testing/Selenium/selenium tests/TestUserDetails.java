package com.crs.test;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class TestUserDetails {
	
	@Test
	public void updateUserDetails() {
		WebDriver driver;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");


		driver.findElement(By.name("login")).click();
		System.out.println(driver.getTitle());
		
		driver.findElement(By.name("userName")).sendKeys("Purushoth");
		driver.findElement(By.name("password")).sendKeys("purushoth@123");
		driver.findElement(By.name("login")).click();
		System.out.println(driver.getTitle());
		
		driver.findElement(By.name("filter")).click();
		driver.findElement(By.name("filter")).sendKeys("Madhan");
		
		driver.findElement(By.name("update")).click();
		driver.findElement(By.name("mobileNumber")).clear();
		driver.findElement(By.name("mobileNumber")).sendKeys("8232456789");
		driver.findElement(By.name("dupdate")).click();
		
		
	}
	
	public static void main(String[] args) {

//		TestUserDetails obj = new TestUserDetails();
//		obj.updateUserDetails();

	}

}
