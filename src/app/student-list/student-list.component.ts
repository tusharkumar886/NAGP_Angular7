import { Component, OnInit } from '@angular/core';
import { StudentService } from '../_services/student.service';
import { IStudent } from '../_models/Student';
import { User } from '../_models/User';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  pageTitle: string = 'Student List';
  errorMessage: string;
  students: any[];

  nameFilter:string;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.loadData()
        .subscribe(student => {
          this.students = student
        }, error => this.errorMessage = <any>error);
    console.log(this.students);
  }

}
