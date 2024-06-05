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
    this.todos = []
  }

  deleteTodo(todo : Todo){
   console.log(todo);
   let index = this.todos.indexOf(todo);
   this.todos.splice(index, 1);
   localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }
}
