package com.crs.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tbl_complaint")
public class Complaint {
	
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "complaint_id")
	private long complaintId;
	
	@Column(name = "user_Name")
	private String userName;
	
	@Column(name = "complaint_Type")
	private String complaintType;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "aadhar_card_number")
	private String aadharCardNumber;
	
	@Column(name = "complaint_status")
	private String complaintStatus;
	
	public Complaint() {
		super();
	}
	
	public Complaint(long complaintId, String userName, String complaintType, String description,
			String aadharCardNumber, String complaintStatus) {
		super();
		this.complaintId = complaintId;
		this.userName = userName;
		this.complaintType = complaintType;
		this.description = description;
		this.aadharCardNumber = aadharCardNumber;
		this.complaintStatus = complaintStatus;
	}



	public long getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(long complaintId) {
		this.complaintId = complaintId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getComplaintType() {
		return complaintType;
	}
	public void setComplaintType(String complaintType) {
		this.complaintType = complaintType;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getAadharCardNumber() {
		return aadharCardNumber;
	}
	public void setAadharCardNumber(String aadharCardNumber) {
		this.aadharCardNumber = aadharCardNumber;
	}
	public String getComplaintStatus() {
		return complaintStatus;
	}
	public void setComplaintStatus(String complaintStatus) {
		this.complaintStatus = complaintStatus;
	}
	
	
	
}
