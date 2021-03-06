import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { AuthLinkComponent } from './auth-link/auth-link.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRoutingModule } from './/app-routing.module';
import { StatsComponent } from './stats/stats.component';
import { RecognitionComponent } from './recognition/recognition.component';
import { LeftRecognitionComponent } from './left-recognition/left-recognition.component';
import { RightRecognitionComponent } from './right-recognition/right-recognition.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavLinksComponent,
    AuthLinkComponent,
    TopNavComponent,
    HeaderComponent,
    MainContentComponent,
    StatsComponent,
    RecognitionComponent,
    LeftRecognitionComponent,
    RightRecognitionComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
