package com.crs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class TestViewStatus {
	
	@Test
	public void viewStatus() {
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
		driver.findElement(By.name("view")).click();
		
		driver.findElement(By.name("userName")).sendKeys("Madhan");
		driver.findElement(By.name("search")).click();
		
		
	}
	
	public static void main(String[] args) {
		TestViewStatus obj = new TestViewStatus();
		obj.viewStatus();

	}

}
