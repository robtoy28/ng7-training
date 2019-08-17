import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasklist = [];
  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      task: ['',],
    })
  }


  ngOnInit() {
  }

  onsubmit(e) {
    const task = this.taskForm.value.task;
    this.tasklist.push(task);
    this.taskForm.reset();
  }

  delete(indexToBeDeleted) {
    this.tasklist.splice(indexToBeDeleted,1);
  }

}
