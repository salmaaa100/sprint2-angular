import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Genre } from '../models/genre.model';

@Component({
  selector: 'app-update-genre',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-genre.component.html'
})
export class UpdateGenreComponent {
  @Input() genre!: Genre;
  @Input() ajout: boolean = true;
  @Output() genreUpdated = new EventEmitter<Genre>();
  @Output() annuler = new EventEmitter<void>();

  saveGenre(): void {
    // on émet une copie : le parent décide d'ajouter ou de modifier
    this.genreUpdated.emit({ ...this.genre });
  }

  onAnnuler(): void {
    this.annuler.emit();
  }
}
