package com.crs.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.crs.bean.Complaint;
import com.crs.repo.ComplaintRepo;

@Service
public class ComplaintService {

	@Autowired
	ComplaintRepo crrepo;
	
	public boolean insert(Complaint complaint) {
		complaint.setComplaintStatus("Not Visited");
		crrepo.save(complaint);
		return true;
   }
	
	public boolean update(Complaint complaint) {
		crrepo.save(complaint);
		return true;
	}
	
	public boolean delete(long complaintId) {
		crrepo.deleteById(complaintId);
		return true;
	}
	
	public List<Complaint> getComplaintDetails(String userName) {
		Iterator<Complaint> it1=crrepo.findByUserName(userName).iterator();
		ArrayList<Complaint> complaintList=new ArrayList<>();
		while(it1.hasNext()) {
			complaintList.add(it1.next());
		}
		return complaintList;
	}
	
	public List<Complaint> getAllComplaintDetails(){
		Iterator<Complaint> it=crrepo.findAll().iterator();
		ArrayList<Complaint> list=new ArrayList<>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
	
}
