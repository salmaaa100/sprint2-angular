import { Component } from '@angular/core';
import { Genre } from '../models/genre.model';
import { MusicianService } from '../services/musician.service';
import { AuthService } from '../services/auth.service';
import { UpdateGenreComponent } from '../update-genre/update-genre.component';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [UpdateGenreComponent],
  templateUrl: './genres.component.html'
})
export class GenresComponent {
  genres: Genre[];
  updatedGenre: Genre = new Genre();
  ajout: boolean = true;

  constructor(private musicianService: MusicianService, public authService: AuthService) {
    this.genres = musicianService.listeGenres();
    this.nouveauGenre();
  }

  nouveauGenre(): void {
    this.updatedGenre = new Genre();
    this.updatedGenre.idGenre = this.musicianService.prochainIdGenre();
    this.ajout = true;
  }

  chargerGenre(g: Genre): void {
    this.updatedGenre = { ...g };
    this.ajout = false;
  }

  genreUpdated(g: Genre): void {
    if (this.ajout) {
      this.musicianService.ajouterGenre(g);
    } else {
      this.musicianService.updateGenre(g);
    }
    this.nouveauGenre();
  }

  supprimerGenre(g: Genre): void {
    if (confirm('Etes-vous sûr de vouloir supprimer ce genre ?')) {
      this.musicianService.supprimerGenre(g);
      this.nouveauGenre();
    }
  }
}
