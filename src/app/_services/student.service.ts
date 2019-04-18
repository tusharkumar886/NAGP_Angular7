import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStudent } from '../_models/Student';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  myStorage:Storage = window.localStorage;

  constructor() {
     
  }

  loadData(): Observable<any[]>{
    return of(JSON.parse(this.myStorage.getItem('students')));
  }

}
