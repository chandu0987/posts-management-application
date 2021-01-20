import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SignInComponent } from './public-pages/sign-in/sign-in.component';
import { SignUpComponent } from './public-pages/sign-up/sign-up.component';
import { HomeComponent } from './public-pages/home.component';
import { PrivateHomeComponent } from './private-pages/home.component';
import { PublicPostListComponent } from './public-pages/post-list/post-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    PrivateHomeComponent,
    PublicPostListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
