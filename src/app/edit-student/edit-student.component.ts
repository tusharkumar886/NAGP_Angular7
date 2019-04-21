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
  
  constructor(private studentService: StudentService) {  }

  ngOnInit() {
  }

  editStudent() {
    this.studentService.updateData(this.student);
    this.emitOutput();
  }

  emitOutput() {
    this.emitter.emit();
  }
}
