import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

interface User {
	gender: 'male' | 'female',
	cell: string,
	email: string,
	nat: string,
	phone: string
}

@Injectable()
export class DataService {

  /*
  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): Observable<User[]> {
  	return this.httpClient.get('https://randomuser.me/api/?results=100').map()
  }
  */

}
