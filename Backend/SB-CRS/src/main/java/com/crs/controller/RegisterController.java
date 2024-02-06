package com.crs.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crs.bean.User;
import com.crs.service.RegisterService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class RegisterController {
	
	@Autowired
	RegisterService service;
	
	@PostMapping("/signup")
	public void performRegister(@RequestBody User user) {
		service.register(user);	
	}

}
