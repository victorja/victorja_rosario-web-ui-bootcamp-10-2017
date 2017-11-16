import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  access_token:string = null;
  refresh_token:string = null;
  currentUser= null;
  playlistID = null;
  private clientID = '5fd743af4a3844aaa3d7f15f3d321ef9';
  private clientSecret = '36d490b5fd2e434295957941d815c095';
  private encodedIDS = btoa((this.clientID + ':' + this.clientSecret));
  private encodedReturn = encodeURI('http://localhost:4200/search');
  private responseType = 'code&scope=';
  private scope = encodeURI('playlist-read-private playlist-modify-public playlist-modify-private');
 
  constructor(private http: Http) { }

  searchTracks(searchTerm:string, token:string = localStorage.getItem('myToken')) {
    let url = 'https://api.spotify.com/v1/search?q=' + searchTerm + '&type=track&limit=10';
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + token);
      return this.http.get(url, {headers : headers}).map((res: Response) => res.json());
  }

  logIn(){
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=' + this.clientID +
                        '&redirect_uri=' + this.encodedReturn + '&response_type=' + this.responseType +
                        this.scope;
  }

  getToken(code = sessionStorage.getItem('code')) {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.encodedIDS);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const params = `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:4200/search`;
    const body = {
      'gran_type': 'authorization_code',
      'code': code,
      'redirect_uri': 'http://localhost:4200/search'
    };
    this.http
      .post('https://accounts.spotify.com/api/token', params, { headers } )
      .subscribe(res => {
        if (res.status === 400) {
          return;
        }else {
          this.access_token = res.json().access_token;
          this.refresh_token = res.json().refresh_token;
          localStorage.setItem('myToken', this.access_token);
          localStorage.setItem('myrefreshToken', this.refresh_token);
          setInterval(this.refreshToken(), 3000000);
          this.getUserId();
        }
      });
    }
      refreshToken(token = localStorage.getItem('myrefreshToken')) {
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + this.encodedIDS);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const params = `grant_type=refresh_token&refresh_token=${token}`;
        const body = {
          'gran_type': 'refresh_token',
          'refresh_token': token
        };
        this.http
          .post('https://accounts.spotify.com/api/token', params, { headers } )
          .subscribe(res => {
            if (res.status === 400) {
              return;
            }else {
              this.access_token = res.json().access_token;
              localStorage.setItem('myToken', this.access_token);
            }
          });
  }

    getUserId(token:string = localStorage.getItem('myToken')) {
      const url = 'https://api.spotify.com/v1/me';
      const headers = new Headers();
      headers.append('Authorization', 'Bearer ' + token);
      this.http.get(url, {headers : headers}).map((res: Response) => res.json())
      .subscribe(result => {
        this.currentUser = result.id;
      });
    }

    createPlaylist(token:string = localStorage.getItem('myToken')) {

      const url = `https://api.spotify.com/v1/users/${this.currentUser}/playlists`;
      const headers = new Headers();
      headers.append('Authorization', 'Bearer ' + token);
      headers.append('Content-Type', 'application/json');
      const body = {
        'name': 'searchDDD playlist'
      };
      this.http.post(url, body, { headers } )
      .subscribe(res => {
        this.playlistID = res.json().id;
        this.addSong();
      });


    }

    addSong(token:string = localStorage.getItem('myToken')){
      const url = `https://api.spotify.com/v1/users/${this.currentUser}/playlists/${this.playlistID}/tracks?`;
      const body = this.parseUris();
      const headers = new Headers();
      headers.append('Authorization', 'Bearer ' + token);
      headers.append('Content-type', 'application/json');
      this.http.post(url, body, { headers } ).subscribe(resp => {
    });
}
    parseUris(){
      let uris = {'uris': []};
      let index = parseInt(localStorage.getItem('trackIndex'), 10);
      let str;
      while(index > 0) {
        str = (JSON.parse(localStorage.getItem(('localPlaylist'.concat(index + ''))))).id;
        uris.uris.push(`spotify:track:${str}`);
        index--;
      }
      return uris;
    }

}
