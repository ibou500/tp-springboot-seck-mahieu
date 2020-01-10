import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { Observable } from "rxjs";
import { CustomerService } from "../customer.service";
import { Customer } from "../customer";
import { Historique } from "../historique";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-historique-list",
  templateUrl: "./historique-list.component.html",
  styleUrls: ["./historique-list.component.css"]
})
export class HistoriqueListComponent implements OnInit {
  historiques: Observable<Historique[]>;

  constructor(private customerService: CustomerService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.historiques = this.customerService.getHistoriquesList();
  }

  deleteHistorique(id: number) {
    this.customerService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  customerDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateCustomer(id: number){
    this.router.navigate(['update', id]);
  }
}