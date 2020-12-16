//importing all needed modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { FinanceComponent } from './finance/finance.component';
import { TaxComponent } from '../app/tax/tax.component';
import { PeopleComponent } from '../app/people/people.component';
import { ContactComponent } from '../app/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


//add paths to each component
const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'finance', component : FinanceComponent},
  {path : 'tax', component : TaxComponent},
  {path : 'people', component : PeopleComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
