import { Injectable } from '@angular/core';
import { Pokemon, PokemonList } from './pokemon.model';
import { POKEMON_LIST } from './pokemon-list.fake';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getpokemonList(): PokemonList{
    return POKEMON_LIST;

  }

  getPokemonById(id: number): Pokemon {
    const pokemon = POKEMON_LIST.find(pokemon => pokemon.id === id);

    if(!pokemon)
      {
        throw new Error(`Pokemon not found with id ${id}`);
      }
      return pokemon;
  }

  getPokemonType(): string[] {
    return [
        'Plante',
        'Poison',
        'Feu',
        'Eau',
        'Insecte',
        'Normal',
        'Vol',
        'Electrik',
        'Fée',
        
    ]
  }

}
