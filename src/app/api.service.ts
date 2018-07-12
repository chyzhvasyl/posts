import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Myinterface} from './myinterface';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class ApiService {

  private _postsurl = 'https://my-json-server.typicode.com/chyzhvasyl/posts/posts';
  private _localurl = '/assets/data/package.json';
  constructor(private httpClient: HttpClient) { }
  getPosts(): Observable<Myinterface[]> {

    return this.httpClient.get<Myinterface[]>(this._localurl);
  }

}
