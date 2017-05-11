import { Component } from '@angular/core';
import {Person} from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons:Person[];

  constructor()
  {
     this.persons=[
      new Person("Salil",30),
      new Person("Vikas",33),
      new Person("Manoj",27)
     ];
  }

  addPerson(person){
      this.persons.unshift(person);
  }
}
