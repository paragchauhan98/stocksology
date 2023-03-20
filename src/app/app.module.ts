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
     BacktestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
