import { Component , Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
 title : string = "";
 desc : string = "";
 @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const todo = {
      sno : 6,
      title : this.title,
      desc : this.desc,
      active : true
    }
    this.todoAdd.emit(todo);
    console.log(this.title, this.desc)
  }
}
