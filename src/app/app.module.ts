import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SignupComponent } from './pages/signup/signup.component';

//form and http

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// import {AngularFireAuthModule} from '@angular/fire/auth'
// import {AngularFireModule} from '@angular/fire'



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    UserCardComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
