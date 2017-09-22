import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent }   from './animal-list.component';
import { NewAnimalComponent }   from './new-animal.component';
import { EditAnimalComponent } from './animal-edit.component';
import { AgePipe } from './age-pipe.pipe';
@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnimalListComponent, NewAnimalComponent, EditAnimalComponent, AgePipe],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
