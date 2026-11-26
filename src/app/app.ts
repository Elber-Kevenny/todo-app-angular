import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './components/todo-list/todo-list';
import { FormsModule } from '@angular/forms';
export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoList, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('todo-app');

  tarefa: Todo | null = null;
  tarefas: Todo[] = [];
  isCompleted: boolean = false;
  tarefaDigitada: string = '';

  carregarTarefas() {
    this.tarefas;
  }

  adicionarTarefa() {
    if (this.tarefaDigitada.trim() === '') return;

    this.tarefas.push({id: this.tarefas.length === 0 ? 1 : this.tarefas.length + 1 , name: this.tarefaDigitada, completed: false });

    this.tarefaDigitada = '';
  }

  handleCompleted(id: number) {
  this.tarefas = this.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        return { ...tarefa, completed: !tarefa.completed }
      } else {
        return tarefa
      }
    })

  }
}
