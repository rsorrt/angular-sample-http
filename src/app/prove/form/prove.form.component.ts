import { Component, OnInit} from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-prove-form',
  templateUrl: './prove.form.component.html'
  
})
export class ProveFormComponent implements OnInit {
  
  ruoli = ['', 'user', 'admin', 'superuser',];

  model = new User(1, 'Rob', 'ho27702', this.ruoli[0]);

  submitted = false;

  onSubmit() { 
    
    this.submitted = true;
  }

  newUser() {
    this.model = new User( 0,'','','');
  }

  constructor() {}
 

  ngOnInit() {
  }


}