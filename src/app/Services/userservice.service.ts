import { Injectable } from '@angular/core';
import { Login } from '../Model/Login';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../Model/RegisterUser';
import { VerifyOtp } from '../Model/VerifyOtp';
import { SendOtp } from '../Model/SendOtp';
import { basename } from 'path';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  BASE_URL = "http://localhost:9090"

  generateToken(login:Login){
    return this.http.post(this.BASE_URL+"/token",login);
  }

  registerUser(registerUser:RegisterUser){
    return this.http.post(this.BASE_URL+"/user/register-user",registerUser);
  }

  generateSecretKey(){
    return this.http.get(this.BASE_URL+"/otp/generate");
  }

  getEmailByUserName(){
    return this.http.get(this.BASE_URL+"/user/get-email-by-user-name/"+localStorage.getItem('username'));
  }

  verifyOtpCode(verifyOtp:VerifyOtp){
    return this.http.post(this.BASE_URL+"/otp/verify",verifyOtp);
  }

  sendOtpToMail(sendOtp:SendOtp){
    return this.http.post(this.BASE_URL+"/otp/send-otp",sendOtp);
  }
}
