package com.crs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crs.bean.Response;
import com.crs.bean.User;
import com.crs.repo.UserRepo;

@Service
public class LoginService {

	@Autowired
	UserRepo repo;
	User user;
	
	public Response login(User user) {
		User ref=repo.findByUserName(user.getUserName());
		User pass=repo.findByPassword(user.getPassword());
		if(ref!=null && pass!=null) {
			String value=ref.getPassword();
			String word=pass.getPassword();
			if (value.equals(word)) {
				String res=ref.getUserType();
			if(res.equals("Admin")) {
				return new Response("Admin Success",true);
			} else {
				return new Response("User Success",true);
			}
			}
			else {
				return new Response("Login Fail",false);
			}
		}  else {
			return new Response("Login Fail",false);
		}
		
	}	
}


