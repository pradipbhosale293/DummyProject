import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecompComponent } from './homecomp/homecomp.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

    
const routes : Routes= [
    {path:"", component:HomecompComponent},
    {path:"Form", component:FormComponent}
  ]

@NgModule({
  declarations: [
    HomecompComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule
  ]
})
export class HomeModule { }
