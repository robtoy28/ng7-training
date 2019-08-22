import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasklist = [];
  taskForm: FormGroup;
  submitted = false;
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasklist, event.previousIndex, event.currentIndex);
  }
}
