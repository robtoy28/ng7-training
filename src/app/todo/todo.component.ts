import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasklist = [];
  taskForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      task: ['', Validators.required],
    })
  }


  ngOnInit() {
  }

  onsubmit(e) {
    this.submitted = true;
    if (this.taskForm.invalid) {
      console.log('taskform invalid');
      return;
    }
    const task = this.taskForm.value.task;
    this.tasklist.push(task);
    this.taskForm.reset();
    this.submitted = false;

  }

  delete(indexToBeDeleted) {
    this.tasklist.splice(indexToBeDeleted,1);
  }

}
