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

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    exports: [RouterModule]
})
export class RoutingModule {}
