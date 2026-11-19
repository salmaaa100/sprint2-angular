import { Routes } from '@angular/router';
import { MusiciansComponent } from './musicians/musicians.component';
import { AddMusicianComponent } from './add-musician/add-musician.component';
import { UpdateMusicianComponent } from './update-musician/update-musician.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { GenresComponent } from './genres/genres.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { musicianGuard } from './musician.guard';

export const routes: Routes = [
  { path: 'musicians', component: MusiciansComponent },
  { path: 'add-musician', component: AddMusicianComponent, canActivate: [musicianGuard] },
  { path: 'updateMusician/:id', component: UpdateMusicianComponent, canActivate: [musicianGuard] },
  { path: 'rechercheParGenre', component: RechercheParGenreComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'musicians', pathMatch: 'full' }
];
