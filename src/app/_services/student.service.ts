import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Student } from '../_models/Student';
import { User } from '../_models/User';
import { map, findIndex } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private currentStudentSubject: BehaviorSubject<Student[]> = new BehaviorSubject([]);
    public currentStudent: Observable<Student[]>;

    constructor(private http: HttpClient) {
        this.currentStudentSubject.next(JSON.parse(localStorage.getItem('students')));
        this.currentStudent = this.currentStudentSubject.asObservable();
    }
  
  private findIndex(student: Student): number{
    return this.currentStudentValue.findIndex(x => x.id == student.id);
  }  
    
  public get currentStudentValue(): Student[] {
      return this.currentStudentSubject.getValue();
  }

  private addData(dataObj) {
    const currentValue = this.currentStudentValue;
    const updateStudent = [...currentValue, dataObj];
    this.currentStudentSubject.next(updateStudent);
  }

  public postData(student: Student){
    student.id = this.currentStudentValue.length + 1;
    if(this.currentStudentValue === null){
      localStorage.setItem('students', JSON.stringify([]));
      this.currentStudentSubject.next([]);
    }
    this.addData(student);
    localStorage.setItem('students', JSON.stringify(this.currentStudentValue));
  }

  public updateData(student: Student) {
    this.currentStudentValue[this.findIndex(student)] = student;
    localStorage.setItem('students', JSON.stringify(this.currentStudentValue));
  }

  public deleteData(student: Student){
    let index = this.findIndex(student);
    if(index !== -1){
      this.currentStudentValue.splice(index, 1);
      localStorage.setItem('students', JSON.stringify(this.currentStudentValue));
    }
  }
}
