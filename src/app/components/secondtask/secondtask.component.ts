import { Component, OnInit } from '@angular/core';
import * as xml2js from 'xml2js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-secondtask',
  templateUrl: './secondtask.component.html',
  styleUrls: ['./secondtask.component.css']
})

export class SecondtaskComponent   {

  username = '';
  data: any;
  found: boolean;

  constructor(private httpClient: HttpClient) {  }

  onNameKeyUp(event: any) {
    this.username = event.target.value;
    this.found = false;
  }
  getProfile() {

    this.httpClient.get(`https://www.pinterest.com/${this.username}/feed.rss/`, { responseType: 'text' } )
      .subscribe(response => {
        console.log(response);
  });
/*  let text = "";
this.http.get('https://jsonplaceholder.typicode.com/posts')
.map((res:Response) => res.xml2json())
.subscribe(
    data => {
        text = data;
        console.log(text);
     });*/


}}
