import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  trackList: any[] = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {

      this.addTracks();

  }



addTracks(){
  let itemId = 1;
  if(localStorage.getItem('trackIndex')){
    itemId = parseInt(localStorage.getItem('trackIndex'), 10);

  }
  while(localStorage.getItem(('localPlaylist'.concat(itemId + '')))){
    this.trackList.push((JSON.parse(localStorage.getItem(('localPlaylist'.concat(itemId + ''))))));
    itemId--;
  }

}

}

