import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ProveComponent } from './prove/prove.component';
import { ProveFormComponent } from  './prove/form/prove.form.component';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, HttpClientModule
  ],
  
  
  declarations: [ 

    AppComponent,

    //-----------------------------
    ProveComponent,
    ProveFormComponent
    //-----------------------------

  ], //declarations


  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
