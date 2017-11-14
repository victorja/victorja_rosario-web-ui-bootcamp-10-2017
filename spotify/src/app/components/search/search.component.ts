import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  inputField: FormControl = new FormControl();
  searchResults: any[] = [];
  code = null;
  localPlaylistLength = 0;
    constructor(private searchService: SearchService, private router: Router) { }


    ngOnInit() {
      if(this.code == null){
        this.getCode();
      }

      this.inputField.valueChanges
      .subscribe(inputField => this.searchService.searchTracks(inputField)
      .subscribe(result => {
        if (result.status === 400) {
          return;
        }else if (result.status === 401){
          this.searchService.refreshToken();
        }else {
          this.searchResults = result.tracks.items;
        }
      }));
    }

    getCode(){
      if(this.code == null){
        let posCode = this.router.url;
        let position = posCode.indexOf('code=');
        if (position !== -1) {//returns -1 if there's no match
        this.code = posCode.slice(position + 5);//5 is the length of 'code=' (see 2 lines above)
          sessionStorage.setItem('code', this.code);
          this.searchService.getToken(this.code);
        }
      }
    }
    //shows button only when not logged
    buttonShow(){
      return !sessionStorage.getItem('code');
    }

    addLocal(result){
      if(localStorage.getItem('trackIndex')){
        this.localPlaylistLength = parseInt(localStorage.getItem('trackIndex'), 10);
      }
      this.localPlaylistLength++;
      localStorage.setItem('trackIndex', (this.localPlaylistLength + ''));
      localStorage.setItem(('localPlaylist'.concat(this.localPlaylistLength + '')), JSON.stringify(result));
    }


  }
