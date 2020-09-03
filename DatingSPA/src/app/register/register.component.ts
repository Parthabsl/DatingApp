import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }
   model: any = {};
   
   @Input() valuesFromParent:  any;
@Output() cancelRegister = new EventEmitter(); 
  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registered');
    }, error => {
      console.log(error);
    })
    //console.log(this.model);
   }

  cancel() {
    console.log("cancelled");
    this.cancelRegister.emit(false);
  }

 

}
