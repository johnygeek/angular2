import {Component,EventEmitter,Output} from '@angular/core';
import {Person} from './models/person';

@Component({
    selector:'person-form',
    template:`<td><input type="text" placeholder="Enter the Person Name" #name></td>
              <td><input type="number" placeholder="Select the Person Age" #age></td>
              <td><button (click)="createPerson(name.value,age.value);reset(name,age);">Create</button></td>`
})

export class PersonFormComponent{
   @Output() personCreated = new EventEmitter<Person>();

   createPerson(pname:string,page:number){
       this.personCreated.emit(new Person(pname,page));
   }
   reset(txtname,txtage){
       txtname.value="";
   }
}