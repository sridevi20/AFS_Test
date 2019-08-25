import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers/drivers.component';
import { DocumentsComponent } from './documents/documents.component';



@NgModule({
  declarations: [HomeComponent, DriversComponent, DocumentsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
