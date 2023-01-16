import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RoutesRecognized } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  onSubmit(){}

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {

  

  }


  onSignupSubmit(f: NgForm){
    const {email,password} = f.form.value
    this.auth.signup(email,password)
    .then((res)=>{
      this.router.navigateByUrl('/')
      this.toastr.success("Signup Succes")
    })
    .catch((err)=>{
      console.log(err.message);
      this.toastr.error("Signup Failed") 
    })
  }

}
