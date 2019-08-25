import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home//home/home.component';
import { DriversComponent } from './home/drivers/drivers.component';
import { DocumentsComponent } from './home/documents/documents.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DriversComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
