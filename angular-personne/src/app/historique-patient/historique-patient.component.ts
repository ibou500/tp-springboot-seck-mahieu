import { Component, OnInit } from '@angular/core';
import { Historique } from "../historique";
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HistoriqueListComponent } from '../historique-list/historique-list.component';
import { Observable } from "rxjs";


@Component({
  selector: 'app-historique-patient',
  templateUrl: './historique-patient.component.html',
  styleUrls: ['./historique-patient.component.css']
})
export class HistoriquePatientComponent implements OnInit {

  id: number;
  historiques: Observable<Historique[]>;

  constructor(private route: ActivatedRoute,private router: Router,
    private customerService: CustomerService) { }

  ngOnInit() {
    

    this.id = this.route.snapshot.params['id'];
    this.historiques=this.customerService.getHistorique(this.id);
    this.customerService.getHistorique(this.id)
      .subscribe(data => {
        console.log(data)
        this.historique = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['historiques']);
  }
}