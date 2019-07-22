import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 title: string = '';
  publisher;
  image_url;

  info: any;
  API_KEY = "2dd5258613e19417fb9cb6b53dfa967b";
  httpdata: any;
 
 
  constructor(private http: HttpClient, _router:Router) { 

    
  }

  onNameKeyUp(event: any) {
    this.title = event.target.value;

  }

  getReceipe() {

    this.http.get(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${this.API_KEY}&q=${this.title}&count=10`)
      .subscribe((data) => { this.displaydata(data); }
      )
  }
  displaydata(data) {
  this.httpdata = data.recipes;
}



}






