import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'edit-animal',
  template: `

  <div *ngIf="childSelectedAnimal" id='editAnimalForm'>
    <div id = "newAnimalFormInternal">
      <h1>Edit Animal</h1>
      <div>
        <label>Animal Species:</label>
        <input [(ngModel)] = "childSelectedAnimal.species" required class="form-control">

        <label>Name:</label>
        <input [(ngModel)] = "childSelectedAnimal.name" required class="form-control">

        <label>Age:</label>
        <input [(ngModel)] = "childSelectedAnimal.age" type='number' required class="form-control" min="1">

        <label>Diet:</label>
        <input [(ngModel)] = "childSelectedAnimal.diet" required class="form-control">

        <label>Location:</label>
        <input [(ngModel)] = "childSelectedAnimal.location" required class="form-control">

        <label>Caretakers:</label>
        <input [(ngModel)] = "childSelectedAnimal.caretakers" type='number' required class="form-control" min="1">

        <label>Sex:</label>
        <input [(ngModel)] = "childSelectedAnimal.sex" required class="form-control">

        <label>Likes (Comma Seperated):</label>
        <input [(ngModel)] = "childSelectedAnimal.likes" class="form-control">

        <label>Dislikes (Comma Seperated):</label>
        <input [(ngModel)] = "childSelectedAnimal.dislikes" class="form-control">

        <label>Image URL:</label>
        <input [(ngModel)] = "childSelectedAnimal.image" class="form-control">


        <button (click) = "closeEditAnimalForm()">Close</button>
      </div>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Output() closeEditAnimalFormSender = new EventEmitter();
  @Input() childSelectedAnimal : Animal;

  closeEditAnimalForm(){
    this.closeEditAnimalFormSender.emit();
  }


}
