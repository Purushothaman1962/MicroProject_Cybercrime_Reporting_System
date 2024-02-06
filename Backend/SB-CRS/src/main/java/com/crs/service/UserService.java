package com.crs.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crs.bean.User;
import com.crs.repo.UserRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo urrepo;
	
	public boolean insert(User user) {
		urrepo.save(user);
		return true;
   }
	
	public boolean update(User user) {
		urrepo.save(user);
		return true;
	}
	
	public boolean delete(long userId) {
		urrepo.deleteById(userId);
		return true;
	}
	
	public User getUserDetails(String userName) {
		User user=urrepo.findByUserName(userName); 
		return user;
	}
	
	public List<User> getAllUserDetails(){
		Iterator<User> it=urrepo.findAll().iterator();
		ArrayList<User> list=new ArrayList<>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
	

}
