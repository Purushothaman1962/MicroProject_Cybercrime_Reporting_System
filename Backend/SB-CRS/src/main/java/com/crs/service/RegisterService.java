package com.crs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crs.bean.User;
import com.crs.repo.UserRepo;

@Service
public class RegisterService {
	
	@Autowired
	UserRepo repo;
	
	public boolean register(User user) {
		user.setUserType("User");
		repo.save(user);
		return true;
  }
}
