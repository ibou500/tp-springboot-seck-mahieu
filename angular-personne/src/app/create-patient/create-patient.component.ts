import { Component, OnInit } from '@angular/core';
import { Patientinput } from '../patientinput';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

	patientinput: Patientinput = new Patientinput();
 	submitted = false;
  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

  newPatient(): void {
    this.submitted = false;
    this.patientinput = new Patientinput();
  }

  save() {
    this.customerService.createPatientInput(this.patientinput)
      .subscribe(data => console.log(data), error => console.log(error));
    this.patientinput = new Patientinput();
    //this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}
