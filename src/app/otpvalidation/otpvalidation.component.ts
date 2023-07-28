import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Model/Login';
import { SendOtp } from '../Model/SendOtp';
import { VerifyOtp } from '../Model/VerifyOtp';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-otpvalidation',
  templateUrl: './otpvalidation.component.html',
  styleUrls: ['./otpvalidation.component.css']
})
export class OtpvalidationComponent implements OnInit {

  constructor(private router:Router,
    private userService:UserserviceService) { }


  ngOnInit(): void {
    this.getSecretKey();
    this.getEmail();
  }

  email?:string;
  secretKey!:string;
  loginModel:Login = new Login()
  verifyOtp:VerifyOtp = new VerifyOtp()
  sendOtpCode:SendOtp = new SendOtp()
  isLoading:boolean=false;


  redirect(redirect: any) {
    this.router.navigate([redirect]);
  }

  validate(item: any) {
    this.isLoading = true;
    this.verifyOtp.code = item.otpcode;
    this.verifyOtp.secret_key = this.secretKey;
    this.userService.verifyOtpCode(this.verifyOtp).subscribe((data:any)=>{
      this.isLoading = false;
      alert(data.message);
    },err=>{
      alert(err.error.message);
    })
  }

  sendOtp(){
    this.isLoading = true;
    this.sendOtpCode.secret_key = this.secretKey;
    this.sendOtpCode.email = this.email;
    this.userService.sendOtpToMail(this.sendOtpCode).subscribe((data:any)=>{
      this.isLoading = false;
      alert(data.message);
    },err=>{
      alert("Something went wrong");
    })
  }

  getSecretKey(){
    this.userService.generateSecretKey().subscribe((data:any)=>{
      this.secretKey = data.message;
    },err=>{
      alert("Something went wrong while generating secret key");
    })
  }

  getEmail(){
    this.userService.getEmailByUserName().subscribe((data:any)=>{
      this.email = data.message;
    },err=>{
      alert("Something went wrong while fetching email");
    })
  }


}
