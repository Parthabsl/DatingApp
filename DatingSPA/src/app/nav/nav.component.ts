import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from '../services/auth.service';
import { tokenKey } from '@angular/core/src/view';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authservice: AuthService, private alertify: AlertifyService, private router: Router) { }

  model: any = {};

  ngOnInit() {
  }
  login() {
    this.authservice.login(this.model).subscribe(next => {
      this.alertify.success('successfully logged in');
    },
    error => {
      this.alertify.message(error);
    }, () => {
      this.router.navigate(['/member']);
    }
    );
  }

  loggedin(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

}
