import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html'
})
export class RegisterPage {
  constructor(private router: Router) {}

  onRegister(){
    this.router.navigate(['login']);
  }

}
