import { Component, OnInit } from '@angular/core';
import { Medecin } from '../medecin';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {

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

  updateMedecin() {
    this.customerService.updateMedecin(this.id, this.medecin)
      .subscribe(data => console.log(data), error => console.log(error));
    this.medecin = new Medecin();
    this.gotoList();
  }

  onSubmit() {
    this.updateMedecin();    
  }

  gotoList() {
    this.router.navigate(['/medecins']);
  }

}
