import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  loginform = new FormGroup({
    Usuario : new FormControl('',Validators.required),
    contraseña : new FormControl('',Validators.required)
  })


  constructor() { 
    
  }

  ngOnInit(): void {
  }
  onLogin(form){
    console.log(form)

  }
  
}
