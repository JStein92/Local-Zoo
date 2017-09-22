import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'new-animal',
  template: `

  <div *ngIf="showNewAnimalForm" id='newAnimalForm'>
    <div id = "newAnimalFormInternal">
      <h1>New Animal</h1>
      <div>
        <label>Animal Species:</label>
        <input #species class="form-control">

        <label>Name:</label>
        <input #name class="form-control">

        <label>Age:</label>
        <input type='number' #age class="form-control" min="1">

        <label>Diet:</label>
        <input #diet class="form-control">

        <label>Location:</label>
        <input #location class="form-control">

        <label>Caretakers:</label>
        <input type='number' #caretakers class="form-control" min="1">

        <label>Sex:</label>
        <input #sex class="form-control">

        <label>Likes (Comma Seperated):</label>
        <input #likes class="form-control">

        <label>Dislikes (Comma Seperated):</label>
        <input #dislikes class="form-control">

        <label>Image URL:</label>
        <input #image class="form-control">

        <button class = 'btn btn-success'(click)="submitForm(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value,dislikes.value,image.value);


         species.value=''; name.value=''; age.value=''; diet.value=''; location.value=''; caretakers.value = '';  sex.value = '';  likes.value = ''; dislikes.value = ''; image.value = '';">Add Animal</button>

        <button (click) = "closeNewAnimalForm()">Close</button>
      </div>
    </div>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  @Output() closeNewAnimalFormSender = new EventEmitter();
  @Input() showNewAnimalForm: boolean;

  closeNewAnimalForm(){
    this.closeNewAnimalFormSender.emit();
  }

  submitForm( species: string,
   name: string,
   age: number,
   diet: string,
   location: string,
   caretakers: number,
   sex: string,
   likes: string,
   dislikes: string,
   image: string) {

    let numAge =+age;
    let numCaretakers = +caretakers;
    let likesArry = likes.split(',');
    let dislikesArry = dislikes.split(',');

    let newAnimalToAdd : Animal = new Animal(species,name,numAge,diet,location,numCaretakers,sex,likesArry,dislikesArry,image);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
