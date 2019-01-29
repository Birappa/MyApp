import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  pwdForm:FormGroup;
  invalidSignup: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
    
   }

  ngOnInit() {
    if(window.localStorage.getItem('username')) {
      this.router.navigate(['/home']);
      return;
    }
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }
    const signupPayload = {
      username: this.signupForm.controls.username.value,
      email: this.signupForm.controls.email.value,
      password: this.signupForm.controls.password.value
    }
    
    this.apiService.signup(signupPayload).subscribe(data => {
      debugger;
      if(data.status === 200) {
        //window.localStorage.setItem('username', data.result);
        this.router.navigate(['/login']);
      }else {
        this.invalidSignup = true;
        alert(data.message);
      }
    });
  }

  /* checkPasswords(pwdForm:FormGroup) { // here we have the 'passwords' group
  let pass = this.pwdForm.controls.password.value;
  let confirmPass = this.pwdForm.controls.confirmpassword.value;

  if(confirmPass.length<=0){
    return null;
  }

  return pass === confirmPass ? null : {doesMatchPassword:true};     
}
  */
}
