import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminLoginService } from 'src/app/Service/admin-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  admin:Admin=new Admin()
  msg='';
  constructor(private adminData:AdminLoginService, private router:Router){}

  ngOnInit(): void {}


  AdminLogin(){
  this.adminData.PostloginAdmin(this.admin).subscribe(data=>
    {alert("Login Success")
    this.router.navigate(['admin'])
  },
  error=>{
    this.msg="Bad credential, please enter valid emailId and Password";
  }
  
  ) ; 
  }


}
