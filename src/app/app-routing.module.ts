import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FooterComponent } from './components/footer/footer.component';
// import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';



const routes: Routes = [
 {path: 'login', component:LoginComponent},
 {path: 'registration', component:RegistrationComponent},
//  {path: 'header', component:HeaderComponent},
//  {path: 'footer', component:FooterComponent},
 {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then((m)=> m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
