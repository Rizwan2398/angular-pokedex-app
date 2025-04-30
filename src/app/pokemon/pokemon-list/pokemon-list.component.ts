import { Component, computed, inject, signal } from '@angular/core';
import { Pokemon } from '../../pokemon.model';
import { PokemonService } from '../../pokemon.service';
import { PokemonBorderDirective } from '../../pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonBorderDirective,DatePipe,RouterLink],
  templateUrl: './pokemon-list.component.html',
  styles: ``
})
export class PokemonListComponent {
  readonly #pokemonService = inject(PokemonService);
  readonly pokemonList = signal(this.#pokemonService.getpokemonList())
  readonly searchTerm = signal('');


  pokemonListFiltred = computed(() => {
    const pokemonList = this.pokemonList();
    const searchTerm = this.searchTerm().trim().toLowerCase();
  
    if (!searchTerm) {
      return pokemonList;
    }
  
    return pokemonList.filter((pokemon) => 
      pokemon.name?.toLowerCase().includes(searchTerm)
    );
  });
  

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
