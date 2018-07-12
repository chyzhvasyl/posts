import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Myinterface} from './myinterface';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class ApiService {
  arr = 10;
  arr2 = 15;
  private _postsurl = 'https://my-json-server.typicode.com/chyzhvasyl/posts';
  private _localurl = '/assets/data/package.json';
  constructor(private http: HttpClient) { }
  getPosts(): Observable<Myinterface[]> {

    return this.http.get<Myinterface[]>(this._localurl);
  }

}
