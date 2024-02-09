package com.crs;

import static org.testng.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.crs.bean.Complaint;
import com.crs.bean.Response;
import com.crs.bean.User;
import com.crs.service.ComplaintService;
import com.crs.service.LoginService;
import com.crs.service.RegisterService;
import com.crs.service.UserService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class SbCrsApplicationTests {

	@Autowired
	LoginService lgservice;
	
	@Autowired
	RegisterService rgservice;

	@Autowired
	UserService urservice;
	
	@Autowired
	ComplaintService cmservice;
	
	boolean res;
	boolean val;
	List<User> list = new ArrayList<>();
	List<User> list1 = new ArrayList<>();
	List<Complaint> list2 = new ArrayList<>();
	List<Complaint> list3 = new ArrayList<>();
	List<Complaint> list4 = new ArrayList<>();
	List<Complaint> list5 = new ArrayList<>();
	User ur=new User(1001,"Shiva","User","9876453456","shiva@gmail.com","Madurai","shiva@123");
	User ad=new User(1,"Purushoth","Admin","9234567812","purushoth@gmail.com","Chennai","purushoth@123");
	User ur1=new User(1032,"Magesh","User","9876453456","magesh@gmail.com","Sivakasi","magesh@001");
	User ur2=new User(1032,"Aravind","User","9876453456","aravind@gmail.com","Madurai","aravind@001");
	Response rs1=new Response("User Success",true);
	Response rs2=new Response("Admin Success",true);
	Response rs3=new Response("Login Fail",false);
	Complaint ct=new Complaint(14,"Magesh","General","Data theft","784567788934","Not Visited");
	Complaint ct1=new Complaint(7,"Shiva","General","Theft of my personal data from my computer","872356783456","Visited");
	 
      @Test
      @Order(1)
	  void performUserLogin() {
    	  Response rs=lgservice.login(ur2);
    	  rs1.equals(rs);
	  }
      
      @Test
      @Order(2)
	  void performAdminLogin() {
    	  Response rs=lgservice.login(ad);
    	  rs2.equals(rs);
	  }
      
      @Test
      @Order(3)
	  void performLoginFail() {
    	  Response rs=lgservice.login(ur2);
    	  rs3.equals(rs);
	  }
      
      
      @Test
      @Order(4)
      void performRegister() {
    	  val=true;
    	  res=rgservice.register(ur1);
    	  assertEquals(val,res);
      }

      @Test
      @Order(5)
      void performUserInsert() {
    	  val=true;
    	  res=urservice.insertAndUpdate(ur1);
    	  assertEquals(val,res);
      }

      
      @Test
      @Order(6)
      void performUserDelete() {
    	  val=true;
    	  res=urservice.delete(1031);
    	  assertEquals(val,res);
      }
      
      @Test
      @Order(7)
      void performViewAllUsers() {
    	list1=urservice.getAllUserDetails();
  		list.add(ur);
  		list.add(ad);
  		list.add(ur1);
  		list.equals(list1);
      }
      
      
      @Test
      @Order(8)
      void performComplaintInsert() {
    	  val=true;
    	  res=cmservice.insert(ct);
    	  assertEquals(val,res);
      }
      
      @Test
      @Order(9)
      void performComplaintUpdate() {
    	  val=true;
    	  res=cmservice.update(ct);
    	  assertEquals(val,res);
      }
      
      @Test
      @Order(10)
      void performComplaintDelete() {
    	  val=true;
    	  res=cmservice.delete(14);
    	  assertEquals(val,res);
      }
      
      @Test
      @Order(11)
      void performViewComplaints() {
    	 String userName="Shiva";
    	list3=cmservice.getComplaintDetails(userName);
  		list2.add(ct1);
  		list2.equals(list3);
      }
      
      
      @Test
      @Order(12)
      void performViewAllComplaints() {
    	list4=cmservice.getAllComplaintDetails();
  		list5.add(ct1);
  		list5.equals(list4);
      }

}
