import { Component, EventEmitter, input, Input, Output} from '@angular/core';
import { Todo } from '../../app';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  @Input() listaTarefas: Todo[] = []


  @Output() handleCompleted = new EventEmitter<number>();

  marcarTarefa(id: number) {
    this.handleCompleted.emit(id)
  }
}
