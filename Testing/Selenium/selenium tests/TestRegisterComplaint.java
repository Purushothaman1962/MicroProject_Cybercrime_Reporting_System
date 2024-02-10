package com.crs.test;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class TestRegisterComplaint {
	
	@Test
	public void insertRegisterComplaint() {
		WebDriver driver;
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");


		driver.findElement(By.name("login")).click();
		System.out.println(driver.getTitle());
		
		driver.findElement(By.name("userName")).sendKeys("Madhan");
		driver.findElement(By.name("password")).sendKeys("madhan@123");
		driver.findElement(By.name("login")).click();
		System.out.println(driver.getTitle());
		
		driver.findElement(By.name("menu")).click();
		driver.findElement(By.name("comp")).click();
		
		driver.findElement(By.name("userName")).sendKeys("Madhan");
		driver.findElement(By.tagName("mat-select")).click();
		driver.findElement(By.name("General")).click();
		driver.findElement(By.name("description")).sendKeys("Facebook Id hacked by someone");
		driver.findElement(By.name("aadharCardNumber")).sendKeys("344567345578");
		driver.findElement(By.name("regcomp")).click();
		
		
		
	}
	
	public static void main(String[] args) {

		TestRegisterComplaint obj = new TestRegisterComplaint();
		obj.insertRegisterComplaint();

	}

}
