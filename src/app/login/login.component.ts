import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Model/Login';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
    private userService:UserserviceService) { }

  ngOnInit(): void {
  }

  loginModel:Login = new Login()


  redirect(redirect: any) {
    this.router.navigate([redirect]);
  }

  login(item: any) {
    this.loginModel.user_name = item.username
    this.loginModel.password = item.pass;
    this.userService.generateToken(this.loginModel).subscribe((data:any)=>{
      localStorage.setItem("token",data.token);
      localStorage.setItem('username',this.loginModel.user_name);
      this.redirect("otp-validation")
      console.log(data)
    },err=>{
      console.log(err)
    })
    console.log(this.loginModel);
  }
}
