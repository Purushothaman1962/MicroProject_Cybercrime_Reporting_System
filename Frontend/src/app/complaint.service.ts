import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complaint } from './model/Complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

 
  private url:string="http://localhost:4010";


  constructor(private http:HttpClient) { }

  insertComplaint(complaint:Complaint) {
    return this.http.post(this.url+"/complaintinsert",complaint);
    
  }

  updateComplaint(complaint : any, complaintId : number) {
    return this.http.put(this.url+"/complaintupdate",complaint);
  }

  deleteComplaint(complaint:Complaint) {
    return this.http.delete(this.url+"/complaintdelete/"+complaint.complaintId);
  }


  getAllDetails(){
    return this.http.get<Complaint[]>(this.url+"/complaintviewAll");
  }

  getDetails(complaint:Complaint){
    return this.http.get<Complaint[]>(this.url+"/complaintview/"+complaint.userName);
  }
}

