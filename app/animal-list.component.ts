import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';
import { AgePipe } from './age-pipe.pipe';

@Component({
  selector: 'animal-list',
  template: `

  <button (click) = "showNewAnimalForm()">Add new Animal</button>

  <select (change)="onAgeChange($event.target.value)">
    <option value="allAges" selected="selected">All Ages</option>
    <option value="young">Young</option>
    <option value="mature">Mature</option>
  </select>

  <div class="panel panel-info" *ngFor="let animal of animalList | agePipe:filterByAge">
    <div class="panel-heading">{{animal.name}}</div>
    <div class="panel-body">

    <ul class="list-group">
      <div class="list-group-item">{{animal.species}} <button (click) = "editAnimal(animal)">Edit</button></div>

      <div class="list-group-item"><span class=" 	glyphicon glyphicon-time"></span>  <label>Age:</label>{{animal.age}}</div>

      <div class="list-group-item"> <span class=" 	glyphicon glyphicon-list-alt"></span><label>Diet:</label>{{animal.diet}}</div>

      <div class="list-group-item"><span class=" 	glyphicon glyphicon-globe"></span> <label>Location:</label>{{animal.location}}</div>

      <div class="list-group-item"> <span class="glyphicon glyphicon-user"></span>  <label>Number of Caretakers:</label>{{animal.caretakers}}</div>

      <div class="list-group-item"><span class="glyphicon glyphicon-tag"></span><label>Sex:</label>{{animal.sex}}</div>
      <br>

      <div class="list-group-item"><span class="glyphicon glyphicon-thumbs-up"></span> Likes:
        <li *ngFor="let like of animal.likes">{{like}}</li>
      </div>

      <div class="list-group-item"><span class=" 	glyphicon glyphicon-thumbs-down"></span> Dislikes:
        <li *ngFor="let dislike of animal.dislikes">{{dislike}}</li>
      </div>

      </ul>

    </div>
  </div>

  `
})

export class AnimalListComponent {
  @Input() animalList: Animal[];
  @Output() showNewAnimalFormSender = new EventEmitter();
  @Output() editAnimalSender = new EventEmitter();

  filterByAge : string = "allAges";

  onAgeChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }

  showNewAnimalForm(){
    this.showNewAnimalFormSender.emit();
  }

  editAnimal(animal : Animal){
    this.editAnimalSender.emit(animal);
  }

  onPintsRemainingChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
