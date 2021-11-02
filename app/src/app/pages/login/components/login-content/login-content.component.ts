import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss']
})
export class LoginContentComponent implements OnInit {
  loginForm:FormGroup
  registerForm:FormGroup
  constructor(private builder:FormBuilder,private api:UserService,public router:Router) {
    this.loginForm=builder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
    this.registerForm=builder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      repeatPassword:['',[Validators.required]]
    })
   }

  ngOnInit(): void {

  }
  login(){
    if(this.loginForm.valid){
      const user:User={
        email:this.loginForm.get('email')?.value,
        password:this.loginForm.get('password')?.value
      }
      this.api.login(user).subscribe((response:any)=>{
        console.log(response)
        localStorage.setItem("token",response.data.token)
        this.router.navigate(['']);
      this.loginForm.reset();
      })
      
    }

  }
  register(){
    if(this.registerForm.valid){
      const user:User={
        name:this.registerForm.get('name')?.value,
        email:this.registerForm.get('email')?.value,
        password:this.registerForm.get('password')?.value
      }
      this.api.register(user).subscribe((response:any)=>console.log(response))
      this.registerForm.reset();
    }
  }

}
