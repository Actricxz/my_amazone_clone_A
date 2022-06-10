import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/SERVICES/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup | undefined;

  constructor(private fb:FormBuilder, private auth: AuthService) {
    this.createForm()
   }

  ngOnInit(): void {
    
  }

  createForm(){
    this.LoginForm= this.fb.group({
      email:[''],
      password:['']
    })
  }
  signin(){
    this.auth.signIn(this.LoginForm?.value.email, this.LoginForm?.value.password )
  }

  createAccount(){
    this.auth.signUp(this.LoginForm?.value.email, this.LoginForm?.value.password)
  }

}
