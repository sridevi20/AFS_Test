import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DriversComponent } from './home/drivers/drivers.component';
import { DocumentsComponent } from './home/documents/documents.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];






@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
