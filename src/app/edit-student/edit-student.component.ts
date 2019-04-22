import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../_models/Student';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  @Input() student:Student;
  @Output() emitter: EventEmitter<boolean> = new EventEmitter();

  categories = ['Domestic','International'];
  validDOB:boolean = false;

  constructor(private studentService: StudentService) {  }

  ngOnInit() {
  }

  editStudent() {
    if(this.student.score){
      this.student.score = Number.parseFloat(this.student.score.toFixed(2));
    }
    this.studentService.updateData(this.student);
    this.emitOutput();
  }

  validAge() {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 5);
    this.validDOB = new Date(this.student.dateOfBirth) > date;
  }

  emitOutput() {
    this.emitter.emit();
  }
}
