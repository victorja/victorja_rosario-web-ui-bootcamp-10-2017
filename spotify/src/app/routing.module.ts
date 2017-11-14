import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {PlaylistComponent} from './components/playlist/playlist.component';

const routes: Routes = [
    {path: '', redirectTo: '/search', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'search', component: SearchComponent},
    {path: 'playlist', component: PlaylistComponent}
];
//https://accounts.spotify.com/authorize?client_id=5fd743af4a3844aaa3d7f15f3d321ef9&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fsearch&response_type=token&state=123
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    exports: [RouterModule]
})
export class RoutingModule {}