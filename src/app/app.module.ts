import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ProveComponent } from './prove/prove.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  
  
  declarations: [ 
    AppComponent,
    HelloComponent, 
    ProveComponent
    ],


  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
