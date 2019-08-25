import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers/drivers.component';
import { DocumentsComponent } from './documents/documents.component';


{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
},

@NgModule({
  declarations: [HomeComponent, DriversComponent, DocumentsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
