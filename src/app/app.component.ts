import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClientHttp } from './client-http.service';
import { Utente } from './utente';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent implements OnInit {
  constructor(public clientHttp: ClientHttp) {}

  utenti: any = [];

  name: string = 'Angular ' + VERSION.major;

  dati: Utente[] = [
    new Utente(1, 'utente-1', 'ho001'),
    new Utente(2, 'utente-2', 'ho002'),
    new Utente(3, 'utente-3', 'ho003')
  ];

  jsonString = JSON.stringify(this.dati);


 headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  
  ngOnInit() {
    this.fetchUtenti();
  }

  fetchUtenti() {
    return this.clientHttp.getUsers().subscribe((data: {}) => {
      this.utenti = data;
    });
  }
}
