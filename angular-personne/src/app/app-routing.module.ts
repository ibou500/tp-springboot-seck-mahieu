import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { MedecinDetailsComponent } from './medecin-details/medecin-details.component';
import { HistoriquePatientComponent } from './historique-patient/historique-patient.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateMedecinComponent } from './create-medecin/create-medecin.component';
import { CreateHistoriqueComponent } from './create-historique/create-historique.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MedecinListComponent } from './medecin-list/medecin-list.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { HistoriqueListComponent } from './historique-list/historique-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { AuthGuard } from '../app/service/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
  { path: 'medecins', component: MedecinListComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'historiques',  component: HistoriqueListComponent },
  { path: 'historiques/:id', component: HistoriquePatientComponent },
  { path: 'patients/:id', component: ListPatientComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'addmedecin', component: CreateMedecinComponent },
  { path: 'addhistorique', component: CreateHistoriqueComponent },
  { path: 'addpatient', component: CreatePatientComponent },
  { path: 'update/:id', component: UpdateCustomerComponent },
  { path: 'updatemedecin/:id', component: UpdateMedecinComponent },
  { path: 'details/:id', component: CustomerDetailsComponent },
  { path: 'detailsmedecin/:id', component: MedecinDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }