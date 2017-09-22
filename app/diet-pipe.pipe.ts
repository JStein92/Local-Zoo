import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal';

@Pipe({
  name: "dietPipe",
  pure: false
})

export class DietPipe implements PipeTransform {
  transform(input: Animal[], desiredDiet) {
    let output: Animal[] = [];
    if(desiredDiet === "Herbivore") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].diet==="Herbivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredDiet === "Carnivore") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].diet==="Carnivore") {
            output.push(input[i]);
          }
        }
        return output;
      }else if(desiredDiet === "Omnivore") {
          for (let i = 0; i < input.length; i++) {
            if (input[i].diet==="Omnivore") {
              output.push(input[i]);
            }
          }
          return output;
        } else { // all kegs
      return input;
    }


  }
}
