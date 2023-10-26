import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRegistrationService } from 'src/app/Service/admin-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  constructor(private adminData:AdminRegistrationService, private router:Router){}
  addAdmin(data:any)
  {
    this.adminData.postRegistration(data).subscribe((psteddata)=>{
      alert("You have Registered successfully,please login")
      this.router.navigate(['login'])
    });
  }
  ngOnInit(): void {
    
  }

}
