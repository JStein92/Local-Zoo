import { Component, Input } from '@angular/core';
import {Animal} from './animal';

@Component({
  selector: 'app-root',
  template: `
  <div class = "container">
    <h1>Local Zoo</h1>

    <animal-list [animalList] = "masterAnimalList" (showNewAnimalFormSender)="showNewAnimalForm()"
    (editAnimalSender)="editAnimal($event)"

    ></animal-list>

  </div>

  <new-animal (newAnimalSender)="addAnimal($event)" [showNewAnimalForm] ="showNewAnimalFormBool" (closeNewAnimalFormSender) = "showNewAnimalForm()"> </new-animal>

  <edit-animal [childSelectedAnimal] = "selectedAnimal" (closeEditAnimalFormSender) = "closeEditAnimalForm()"> </edit-animal>
  `
})

export class AppComponent {

  showNewAnimalFormBool=false;
  selectedAnimal = null;

  editAnimal(animal){
      this.selectedAnimal = animal;
  }
  closeEditAnimalForm(){
      this.selectedAnimal = null;
  }


  addAnimal(newAnimalToAdd){
    this.masterAnimalList.push(newAnimalToAdd);
    this.showNewAnimalForm();

  }

  showNewAnimalForm(){

    if (this.showNewAnimalFormBool){
      this.showNewAnimalFormBool=false;
    } else{
      this.showNewAnimalFormBool=true;
    }

  }

  masterAnimalList: Animal[] = [
  new Animal("African Elephant", "Trunks", 1, "Herbavore", "North Trail", 5, "Male", ["Shade", "Painting", "Playing"], ["Loud noises", "Dogs"], "https://i.ytimg.com/vi/SNggmeilXDQ/maxresdefault.jpg"),

  new Animal("Arctic Fox", "Sunny",5, "Carnivore", "South Trail", 3, "Female", ["Sunlight", "Caves", "Snow"], ["Children", "Birds"], "http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/a/arctic-fox_thumb.JPG"),

  new Animal("Turtle", "Shelly", 93, "Herbavore", "Jungle Zone", 1, "Male", ["Rivers", "Hiding", "Leaves"], ["Bugs", "Balloons"], "http://turtlebackzoo.com/wp-content/uploads/2016/07/exhibit-headers_0008_SOUTH-AMERICA-600x400.jpg"),

  new Animal("Zebra", "Stripey", .5, "Omnivore", "Savana", 4, "Female", ["Trees", "Dancing"], ["Solitude", "Cats"], "https://a-z-animals.com/media/animals/images/470x370/zebra_8.jpg")

]


}
