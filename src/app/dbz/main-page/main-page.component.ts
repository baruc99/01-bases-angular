import { Component,} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'goku',
      poder: 15000
    },
    {
      nombre: 'vegeta',
      poder: 8500
    }
  ];

  nuevo: Personaje = {
    nombre: "roshi",
    poder: 213
  }
  


  agregarNuevoPersonaje( argumento: Personaje ){    
    this.personajes.push( argumento );
  }

  constructor( private dbzService: DbzService ){

  }


}
