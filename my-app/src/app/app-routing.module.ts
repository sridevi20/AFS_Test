import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DriversComponent } from './home/drivers/drivers.component';
import { DocumentsComponent } from './home/documents/documents.component';
import { HomePageComponent } from './home-page/home-page.component';



const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' }
];






@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
