import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal';

@Pipe({
  name: "agePipe",
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredAge) {
    let output: Animal[] = [];
    if(desiredAge === "young") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].age<2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredAge === "mature") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].age>=2) {
            output.push(input[i]);
          }
        }
        return output;
      }  else { // all kegs
      return input;
    }


  }
}
