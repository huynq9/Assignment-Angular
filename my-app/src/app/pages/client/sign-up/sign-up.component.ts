import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
declare var $:any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  constructor( private router:Router, private _http:HttpClient) { }
  singup:FormGroup|any;
  signuser:any;
  ngOnInit(): void {
    this.singup = new FormGroup({
      'fname': new FormControl(),
      'lname':new FormControl(),
      'email':new FormControl(),
      'phone':new FormControl(),
      'password': new FormControl()
    })
  }

  signupdata(singup:FormGroup){
    //console.log(this.singup.value);
    this.signuser = this.singup.value.fname
    this._http.post<any>("http://localhost:3000/signup", this.singup.value)
    .subscribe(res=>{
      alert('data added successfully');
      this.singup.reset();
      this.router.navigate(['signin'])
    })

  }

  sbtn(){
   
    this.router.navigate(['login']);
    //$('.form-box1').css('z-index', '99');
    $('.form-box').css('display','block');
    $('.form-box1').css('display','none');
  }
}
