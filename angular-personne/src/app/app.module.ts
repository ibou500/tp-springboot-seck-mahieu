import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HistoriqueListComponent } from './historique-list/historique-list.component';
import { HistoriquePatientComponent } from './historique-patient/historique-patient.component';
import { CreateHistoriqueComponent } from './create-historique/create-historique.component';
import { CreateMedecinComponent } from './create-medecin/create-medecin.component';
import { MedecinDetailsComponent } from './medecin-details/medecin-details.component';
import { MedecinListComponent } from './medecin-list/medecin-list.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    UpdateCustomerComponent,
    LoginComponent,
    HomeComponent,
    ConnexionComponent,
    HistoriqueListComponent,
    HistoriquePatientComponent,
    CreateHistoriqueComponent,
    CreateMedecinComponent,
    MedecinDetailsComponent,
    MedecinListComponent,
    UpdateMedecinComponent,
    ListPatientComponent,
    CreatePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
