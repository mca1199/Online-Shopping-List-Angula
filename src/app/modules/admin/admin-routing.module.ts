import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

import { ProductViewComponent } from './components/product-view/product-view.component';

const routes: Routes = [
  {path: '', component:AdminDashboardComponent, children: [
    {path: 'product-add', component:ProductAddComponent},
    {path: 'product-view', component:ProductViewComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
