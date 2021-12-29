import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  onClickOpen:any= true

  OnclickOpenSingUp:any= false
  constructor() { }

  ngOnInit(): void {
  }
  OpenSingInForm(){
    this.onClickOpen=true
    this.OnclickOpenSingUp=false
  }

  OpenSingUpForm(){
    this.OnclickOpenSingUp=true
    this.onClickOpen=false
  }
}
