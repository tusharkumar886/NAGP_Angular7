import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../_models/Student';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  @Input() student:Student;
  @Output() emitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  deleteStudent() {
    this.studentService.deleteData(this.student);
    this.emitOutput();
  }

  emitOutput() {
    this.emitter.emit();
  }
}
