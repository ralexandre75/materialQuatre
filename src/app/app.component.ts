import { Component, ViewChild, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { DataService } from './data.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

interface User {
  gender: 'male' | 'female',
  cell: string,
  email: string,
  nat: string,
  phone: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  providers: [ DataService ]
})
export class AppComponent {
  public users: User[];
  public dataSource: MatTableDataSource<User>;
  public displayedColumns: string[] = ['gender', 'cell', 'email', 'nat', 'phone']
  @ViewChild('paginator') public paginator: MatPaginator;

  //  constructor(private fb: FormBuilder, private matIconRegistry: MatIconRegistry){}

  constructor(private dialog: MatDialog,
              private snack: MatSnackBar,
              private dataService: DataService ){}

  
  ngOnInit(){
 /*   this.dataService.fetchUsers().subscribe( users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    }); */
  //   this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }


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

  public info(message: string): void{
    const snackRef = this.snack.open(message, 'cancel', {
      duration: 2000
    });

    snackRef.onAction().subscribe( ()=> {
      console.log('cancel');
    })

    snackRef.afterDismissed().subscribe(()=>{
      console.log('done');
    })
  }


}

