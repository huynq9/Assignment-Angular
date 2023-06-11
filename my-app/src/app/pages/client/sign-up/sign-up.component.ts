import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  formSignup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    name:['',[Validators.required]],
    phone: ['', [Validators.required]],
    confirmPassword: ['']
  }, { validators: this.checkPassword })

  checkPassword(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      return null
    }
    return { mismatch: true }
  }
  constructor(private fb: FormBuilder, private auth: AuthService, private router:Router) {

  }
  onHandleSubmit() {
    if (this.formSignup.valid) {
      this.auth.signup(this.formSignup.value).subscribe(data => {
        // console.log(data);
        alert("Register successfully");
        this.formSignup.reset();
        this.router.navigate(["signin"])
      })
    }
  }
}