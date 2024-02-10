package com.crs.test;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;


public class TestRegister {
		
		@Test
		public void performRegister() {
			WebDriver driver;
			System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
			driver = new ChromeDriver();
			driver.navigate().to("http://localhost:4200/");
			
			driver.findElement(By.name("register")).click();
			System.out.println(driver.getTitle());
			
			driver.findElement(By.name("userName")).sendKeys("Madhan");
			driver.findElement(By.name("mobileNumber")).sendKeys("9634234567");
			driver.findElement(By.name("eMailId")).sendKeys("madhan@gmail.com");
			driver.findElement(By.name("password")).sendKeys("madhan@123");
			driver.findElement(By.name("location")).sendKeys("Kovipatti");


			driver.findElement(By.name("register")).click();
			System.out.println(driver.getTitle());
			
		//	driverInsert.quit();
			
		}
		
		public static void main(String[] args) {

			TestRegister obj = new TestRegister();
			obj.performRegister();

		}

	}

