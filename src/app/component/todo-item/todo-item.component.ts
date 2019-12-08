import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes
  }

  onToggle(todo) {
    //toggle in UI
    const currentState = this.todo.completed ? false : true
    this.todo.completed = currentState
    //toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    console.log('delete', todo)
  }

}
