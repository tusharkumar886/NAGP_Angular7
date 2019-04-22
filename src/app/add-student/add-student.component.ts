import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/Student';
import { StudentService } from '../_services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = {
    id:null,
    name: null,
    category: null,
    domicile: null,
    birthCertificate: null,
    marksheet: null,
    policeClear: null,
    passport: null,
    declaration: null,
    dateOfBirth: null,
    father: null,
    mother: null,
    score: null
  };
  categories = ['Domestic','International'];
  validDOB:boolean = false;

  constructor(private studentService: StudentService, private route: Router) { }

  ngOnInit() {

  }

  addStudent(student: Student){
    if(!student.id){
      if(student.score){
        this.student.score = Number.parseFloat(this.student.score.toFixed(2));
      }
      this.postStudent(student);
    }
    this.route.navigate(['/studentList']);
  }

  validAge() {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 5);
    this.validDOB = new Date(this.student.dateOfBirth) > date;
  }

  private postStudent(student){
    this.studentService.postData(student);
  }

}
