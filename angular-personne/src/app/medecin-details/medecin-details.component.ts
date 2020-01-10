import { Medecin } from '../medecin';
import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { MedecinListComponent } from '../medecin-list/medecin-list.component';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-medecin-details',
  templateUrl: './medecin-details.component.html',
  styleUrls: ['./medecin-details.component.css']
})
export class MedecinDetailsComponent implements OnInit {

	id: number;
  medecin: Medecin;
  constructor(private route: ActivatedRoute,private router: Router,
    private customerService: CustomerService) { }

  ngOnInit() {
  	this.medecin = new Medecin();

    this.id = this.route.snapshot.params['id'];
    
    this.customerService.getMedecin(this.id)
      .subscribe(data => {
        console.log(data)
        this.medecin = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['medecins']);
  }
}
