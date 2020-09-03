import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  registerMode = false;
  values: any;

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
this.values = response;
    }, error => {console.log(error);});
  }

  registerToggle(){
    this.registerMode = true;
  }

  cancelEvent(registercheck: boolean){
    this.registerMode = registercheck;
  }
}
