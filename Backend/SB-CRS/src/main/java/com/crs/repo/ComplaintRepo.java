package com.crs.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crs.bean.Complaint;

public interface ComplaintRepo extends JpaRepository<Complaint, Long> {

	public List<Complaint> findByUserName(String userName);
}
