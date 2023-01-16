import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: any;

  constructor(private auth: AuthService,private router: Router,private toastr: ToastrService){

    auth.getUser().subscribe((user)=>{
      this.email = user?.email;
    })

  }

  ngOnInit(): void {}

  async handleLogout(){
    try{
      const res = await this.auth.logout();
      this.router.navigateByUrl('/signin');
      this.toastr.info("Login Again TO Continue")
      this.email = null
    }catch{
      this.toastr.error("Something's Wrong")
    }
  }

}
