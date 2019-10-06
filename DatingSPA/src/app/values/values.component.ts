import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
values: any;
  getValues(){
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
this.values = response;
    }, error => {console.log(error);});
  }

}
