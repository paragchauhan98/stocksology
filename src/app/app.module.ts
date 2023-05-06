import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HeaderComponent } from './header/header/header.component';
import { FeatureComponent } from './features/feature/feature.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { FooterComponent } from './footer/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BacktestingComponent } from './backtesting/backtesting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
// import { MatOption } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
// firebase starts
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { SignInComponent } from './registration/components/sign-in/sign-in.component';
import { SignUpComponent } from './registration/components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './registration/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './registration/components/verify-email/verify-email.component';
import { AuthService } from './shared/services/auth.service';
// firebase ends
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
     HeaderComponent,
     FeatureComponent,
     AboutComponent,
     ContactComponent,
     FooterComponent,
     SidebarComponent,
     BacktestingComponent,
    
     SignInComponent,
     SignUpComponent,
     ForgotPasswordComponent,
     VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
