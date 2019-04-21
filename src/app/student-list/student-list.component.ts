import { Component, OnInit } from '@angular/core';
import { StudentService } from '../_services/student.service';
import { Student } from '../_models/Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  pageTitle: string = 'Student List';
  students: Student[];

  selectedStudent: Student;
  renderViewDialog: boolean = false;
  renderEditDialog: boolean = false;
  renderDeleteDialog: boolean = false;
  errorMessage: string;  
  nameFilter:string;
  categoryFilter:string;
  categories = ['All','Domestic','International'];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.currentStudentValue;
  }

  ngOnInit() { }

  onViewClick(student: Student){
    this.selectedStudent = student;
    this.alterViewDialog();
  }

  onEditClick(student: Student) {
    this.selectedStudent = student;
    this.alterEditDialog();
  }

  onDeleteClick(student: Student){
    this.selectedStudent = student;
    this.alterDeleteDialog();
  }

  alterViewDialog(){
    this.renderViewDialog = !this.renderViewDialog;
  }

  alterEditDialog() {
    this.renderEditDialog = !this.renderEditDialog;
  }

  alterDeleteDialog() {
    this.renderDeleteDialog = !this.renderDeleteDialog;
  }
}
