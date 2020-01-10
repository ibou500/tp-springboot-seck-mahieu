import { Component, OnInit } from '@angular/core';
import { MedecinDetailsComponent } from '../medecin-details/medecin-details.component';
import { Observable } from "rxjs";
import { CustomerService } from "../customer.service";
import { Medecin } from "../medecin";
import { Router } from '@angular/router';

@Component({
  selector: 'app-medecin-list',
  templateUrl: './medecin-list.component.html',
  styleUrls: ['./medecin-list.component.css']
})
export class MedecinListComponent implements OnInit {

	medecins: Observable<Medecin[]>;
  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
  	this.reloadData();
  }

  reloadData() {
    this.medecins = this.customerService.getMedecinsList();
  }

  deleteMedecin(id: number) {
    this.customerService.deleteMedecin(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  medecinDetails(id: number){
    this.router.navigate(['detailsmedecin', id]);
  }

    updateMedecin(id: number){
    this.router.navigate(['updatemedecin', id]);
  }

  listPatient(id: number){
    this.router.navigate(['patients', id]);
  }

  list(){
    this.router.navigate(['addpatient']);
  }

}
