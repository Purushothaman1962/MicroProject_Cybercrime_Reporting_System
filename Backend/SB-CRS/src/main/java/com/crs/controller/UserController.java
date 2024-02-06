package com.crs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crs.bean.Complaint;
import com.crs.bean.User;
import com.crs.service.UserService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class UserController {
	
	@Autowired
	UserService urservice;
	
	@PutMapping("/userupdate")
	public void performUpdate(@RequestBody User user) {
	    urservice.update(user);	
	}
	
	@DeleteMapping("/userdelete/{userId}")
	public void performDelete(@PathVariable("userId") long userId) {
		urservice.delete(userId);
	}
	
	@GetMapping("/userview/{userName}")
	public User viewUserDetails(@PathVariable String userName){
		User user=urservice.getUserDetails(userName);
		return user;
	}
	
	@GetMapping("/userviewAll")
	public List<User> viewAllUserDetails(){
		List<User> allList=urservice.getAllUserDetails();
		return allList;
	}
	

}
