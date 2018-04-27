import { Component, ViewChild, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  constructor(private fb: FormBuilder, private matIconRegistry: MatIconRegistry){}

  constructor(private dialog: MatDialog){}

  
  // ngOnInit(){
  //   this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  // }


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

  public form: FormGroup;

  public openDialog(): void{
    this.dialog.open(DialogComponent, {
      width: '800px',
      height: '400px'
    });
  }


}

