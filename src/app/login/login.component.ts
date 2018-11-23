import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mdp = 'esme';
  value = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(mdp: string) { 
  	this.value = mdp;
  	if(this.value === this.mdp)
  		this.router.navigate(['/stats']);
  	else
  		this.router.navigate(['/']);

  }

}
