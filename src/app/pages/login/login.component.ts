import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {

  }

  // onLoginSubmit(f: NgForm){
  //   const {email,password} = f.form.value
  //   this.auth.login(email,password)
  //   .then((res)=>{
  //     this.router.navigateByUrl('/')
  //     this.toastr.success("Signup Succes")
  //   })
  //   .catch((err)=>{
  //     console.log(err.message);
  //     this.toastr.error("Signup Failed") 
  //   })
  // }

}
