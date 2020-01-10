import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Medecin } from '../medecin';


@Component({
  selector: 'app-create-medecin',
  templateUrl: './create-medecin.component.html',
  styleUrls: ['./create-medecin.component.css']
})
export class CreateMedecinComponent implements OnInit {

	medecin: Medecin = new Medecin();
    submitted = false;
  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

  newMedecin(): void {
    this.submitted = false;
    this.medecin = new Medecin();
  }

  save() {
    this.customerService.createMedecin(this.medecin)
      .subscribe(data => console.log(data), error => console.log(error));
    this.medecin = new Medecin();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/medecins']);
  }

}
