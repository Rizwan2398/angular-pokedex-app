import { Component,computed,inject,signal } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { PokemonBorderDirective } from './pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  imports: [PokemonBorderDirective,DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly #pokemonService = inject(PokemonService);

  pokemonList = signal(this.#pokemonService.getpokemonList())


  name = signal("Pikachu");
  life = signal(21);
  Taille = "Moyen";
  size(pokemon : Pokemon){
    if (this.life() <= 10) {
      return "Petit";
    } else if (this.life() >= 25) {
      return "Grand";
    }
    return "moyen";
  };
  imageSrc = signal('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png');

  incrementLife(pokemon: Pokemon) {
    pokemon.life += 1;
    
  }

  decrementLife(pokemon: Pokemon) {
    pokemon.life -= 1;
    
  }
}
