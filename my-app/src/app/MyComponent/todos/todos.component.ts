import { Component, OnInit, NO_ERRORS_SCHEMA} from '@angular/core';
import {Todo} from "../../Todos";
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  schemas: [NO_ERRORS_SCHEMA] 
})
export class TodosComponent implements OnInit{

  todos : Todo[] = [];
  constructor() {
    this.todos = [
      {
        sno : 1,
        title : "Hello this is first title 😄",
        desc : "Description 1",
        active : true
      },
      {
        sno : 2,
        title : "Hello this is second title ⏲️",
        desc : "Description 2",
        active : true
      },
      {
        sno : 3,
        title : "Hello this is Thrid title ♻️",
        desc : "Description 3",
        active : true
      },
      {
        sno : 4,
        title : "Hello this is Fourth title 🎆",
        desc : "Description 4",
        active : false
      },
    ]
  }

  deleteTodo(todo : Todo){
   console.log(todo);
   let index = this.todos.indexOf(todo);
   this.todos.splice(index, 1);
  }

  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }
}
