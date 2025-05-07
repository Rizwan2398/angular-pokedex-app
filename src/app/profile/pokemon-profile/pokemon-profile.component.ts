import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-profile',
  imports: [RouterLink, DatePipe],
  templateUrl: './pokemon-profile.component.html',
  styles: ``
})
export class PokemonProfileComponent {

  readonly #routes = inject(ActivatedRoute);
  readonly #pokemonService = inject(PokemonService);
  readonly #pokemonId = Number(this.#routes.snapshot.paramMap.get('id'));

  readonly pokemon = signal(
    this.#pokemonService.getPokemonById(this.#pokemonId)
  ); 
  

}
