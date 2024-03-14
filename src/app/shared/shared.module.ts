import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './pages/error404/error404.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EmailInputComponent } from './components/email-input/email-input.component';



@NgModule({
  declarations: [
    Error404Component,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    ContactFormComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    ContactPageComponent,
    EmailInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    ContactPageComponent,
  ]
})
export class SharedModule { }
