import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacktestingComponent } from './backtesting/backtesting.component';
import { HeaderComponent } from './header/header/header.component';
import { SignInComponent } from './registration/components/sign-in/sign-in.component';
import { SignUpComponent } from './registration/components/sign-up/sign-up.component';

import { ForgotPasswordComponent } from './registration/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './registration/components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [
  {path:'',component:HeaderComponent},
  { path: 'backtesting', component: BacktestingComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },

  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
