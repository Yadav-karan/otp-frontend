import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUser } from '../Model/RegisterUser';
import { UserserviceService } from '../Services/userservice.service';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
})
export class RegisteruserComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserserviceService
  ) {}

  ngOnInit(): void {}

  DOB: any;
  sleepTime: any;
  wakeupTime: any;

  registerUser = new RegisterUser();

  register(item: any) {
    this.registerUser.first_name = item.firstname;
    this.registerUser.last_name = item.lastname;
    this.registerUser.user_name = item.username;
    this.registerUser.password = item.password;
    this.registerUser.email = item.email;
    this.userService.registerUser(this.registerUser).subscribe((data: any) => {
      alert("Registration Successfull");
      this.redirect("")
    },err=>{
      console.log(err);
    });
  }

  redirect(redirect: any) {
    this.router.navigate([redirect]);
  }
}
