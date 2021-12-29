import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutcompComponent } from './aboutcomp/aboutcomp.component';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[
  {path:"about" ,component:AboutcompComponent}
]

@NgModule({
  declarations: [
    AboutcompComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class AboutModule { }
