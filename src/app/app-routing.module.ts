import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaxRegistrationComponent } from './taxRegistration/tax-registration.component';
const appRoutes: Routes = [
  { path: 'tax-registration',      component: TaxRegistrationComponent }
  ,
  { path: '',
    redirectTo: '/app-route',
    pathMatch: 'full'
  },  
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
