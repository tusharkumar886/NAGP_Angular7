import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../_models/Student';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  @Input() student:Student;
  @Output() emitter: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitOutput() {
    this.emitter.emit();
  }
}
