import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  auth: AngularFireAuth) { }

  signup(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  getUser(){
    return this.auth.authState;
  }

  logout(){
    return this.auth.signOut
  }
}
