package com.crs.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crs.bean.User;

public interface UserRepo extends JpaRepository<User, Long>{

	public User findByUserName(String userName);
	public User findByPassword(String password);
	public User deleteByUserName(String userName);
}
