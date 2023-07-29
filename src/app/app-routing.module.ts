import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxFormComponent } from './taxRegistrationForm/tax-form.component';
import { TaxRegistrationComponent } from './taxRegistration/tax-registration.component';
const appRoutes: Routes = [
  { path: '',      component: TaxFormComponent }
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
