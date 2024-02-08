import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  result:any;
  
  private url:string="http://localhost:4010";


  constructor(private http:HttpClient) { }

  insert(user:User):Observable<any> {
    return this.http.post(this.url+"/signup",user);
  
  }

  updateUser(user:User,userId:number) {
    return this.http.put(this.url+"/userupdate",user);
    
  }

  deleteUser(user:User) {
    return this.http.delete(this.url+"/userdelete/"+user.userId); 
  }


  getAllDetails(){
    return this.http.get<User[]>(this.url+"/userviewAll");
  }

  login(User:any) {
    return this.http.post(this.url+"/login",User);
  }

}
