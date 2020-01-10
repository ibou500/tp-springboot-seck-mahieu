import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Connexion } from "../connexion";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connexion: Connexion;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
  ) { }

  ngOnInit() { }

  login() {
    console.log('Tentative de connexion');
    this.connexion = new Connexion();
    this.customerService.getConnexion(this.connexion)
      .subscribe(data => {
        console.log(data)
        this.connexion = data;
      }, error => console.log(error));

    // Vérifier que login/mdp sont correctes, par exemple par une requête à un service REST
    localStorage.setItem('user', JSON.stringify(this.customerService.getConnexion(this.connexion)));
    console.log(this.customerService);
    this.router.navigate(['/home']);
  }
}