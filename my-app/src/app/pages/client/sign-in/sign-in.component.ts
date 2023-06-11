// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// // declare var $:any;
// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.component.html',
//   styleUrls: ['./sign-in.component.css']
// })
// export class SignInComponent implements OnInit{

//   public signinForm!: FormGroup;

//   constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

//   ngOnInit(): void {
//     this.signinForm = this.formbuilder.group({
//       email: [''],
//       password: ['', Validators.required]
//     })
//   }
//   signin(){
//     this.http.get<any>("http://localhost:3000/signup")
//     .subscribe(res=>{
//       const user = res.find((a:any)=>{
//         return a.email === this.signinForm.value.email && a.password === this.signinForm.value.password 
//       });
//       if(user){
//         alert('Login Succesful');
//         this.signinForm.reset()
//         this.router.navigate(["home"])
//       }else{
//         alert("user not found")
//       }
//     })
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  formSignin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  constructor(private fb: FormBuilder, private authService: AuthService) {

  }

  onHandleSubmit() {
    if (this.formSignin.valid) {
      this.authService.signin(this.formSignin.value).subscribe(data => {
        localStorage.setItem('userInfo', JSON.stringify(data));
      })
    }
    console.log(this.formSignin.value);
  }
}