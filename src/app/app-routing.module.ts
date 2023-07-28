import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterUser } from './Model/RegisterUser';
import { OtpvalidationComponent } from './otpvalidation/otpvalidation.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register-user",component:RegisteruserComponent},
  {path:"otp-validation",component:OtpvalidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
