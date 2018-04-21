import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public list: string[] = [
  	'chip1',
  	'chip2',
  	'chip3',
  	'chip4'
  ]


  public delete(chip){
  	console.log(chip);
  	this.list = this.list.filter( c => c != chip);
  }
}
