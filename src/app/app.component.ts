import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ApiService} from './api.service';
import {Myinterface} from './myinterface';
import {Pipe} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
@Pipe({name: 'keys'})
export class AppComponent implements OnInit {
  title = 'app';
public posts = [];


 constructor(private apiservice: ApiService) {


 }

ngOnInit() {
 this.apiservice.getPosts().subscribe(data => this.posts = data);

}


}
