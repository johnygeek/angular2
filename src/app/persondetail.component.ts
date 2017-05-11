import {Component,Input} from '@angular/core';
import {Person} from './models/person';

@Component({
    selector:"person-detail",
    template:`<td>{{data.name}}</td>
    <td>{{data.age}}</td>`
})

export class PersonDetailComponent{
  @Input('person') data:Person;
}