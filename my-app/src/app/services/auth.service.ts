import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuth } from '../interfaces/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='http://localhost:9999/user';

  constructor(private http:HttpClient) { }

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:9999/role');
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  GetAllCustomer(){
    return this.http.get('http://localhost:9999/customer');
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:9999/roleaccess?role='+role+'&menu='+menu)
  }
}
