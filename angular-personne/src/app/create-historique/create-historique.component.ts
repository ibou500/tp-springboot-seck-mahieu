import { Component, OnInit } from '@angular/core';
import { Historiqueinput } from '../historiqueinput';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-historique',
  templateUrl: './create-historique.component.html',
  styleUrls: ['./create-historique.component.css']
})
export class CreateHistoriqueComponent implements OnInit {

	historiqueinput: Historiqueinput = new Historiqueinput();
 	submitted = false;
  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

  newHistorique(): void {
    this.submitted = false;
    this.historiqueinput = new Historiqueinput();
  }

  save() {
    this.customerService.createHistoriqueInput(this.historiqueinput)
      .subscribe(data => console.log(data), error => console.log(error));
    this.historiqueinput = new Historiqueinput();
    //this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}
