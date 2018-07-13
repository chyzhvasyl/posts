import { Component, OnInit } from '@angular/core';
import * as xml2js from 'xml2js';
import * as x2js from 'x2js';
import {Observe} from './observe';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-secondtask',
  templateUrl: './secondtask.component.html',
  styleUrls: ['./secondtask.component.css']
})

export class SecondtaskComponent   {
   /*  x2js = new X2JS();
    document = x2js.xml2js(xml);
  xml = x2js.js2xml(document);*/
  username = '';
  data: Observable<any>;
  found: boolean;
  parser: any;
  constructor(private httpClient: HttpClient) {  }

  onNameKeyUp(event: any) {
    this.username = event.target.value;
    this.found = false;
  }
  getProfile( ) {
    this.httpClient.get(`https://www.pinterest.com/${this.username}/feed.rss/`, { responseType: 'text' } )
      .subscribe((data: any   ) =>
        {
         if (data.length)
          {
           this.data  = data ;
           this.found = true;
          }
          }, (err: HttpErrorResponse) =>
            {
                  if (err.error instanceof Error)
                  {
                      console.log('error');
                  } else
                    {
                        alert('Нет данных');
                    }
            }

  );
}
}
/*  let text = "";
this.http.get('https://jsonplaceholder.typicode.com/posts')
.map((res:Response) => res.xml2json())
.subscribe(
    data => {
        text = data;
        console.log(text);
     */
