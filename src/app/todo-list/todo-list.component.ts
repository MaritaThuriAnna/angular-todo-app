import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  newTask = '';
  tasks = signal<{ name: string; completed: boolean }[]>([]);

  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks.set(JSON.parse(storedTasks));
    }
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.update(tasks => [...tasks, { name: this.newTask, completed: false }]);
      this.newTask = '';
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    }
  }

  deleteTask(index: number) {
    this.tasks.update(tasks => tasks.filter((_, i) => i !== index));
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }

  checkCompleted(index: number){
    console.log('Before toggle:', this.tasks());
    this.tasks.update(tasks =>{

      const updatedTasks = [...tasks];
      console.log('Toggling task at index:', index);
      updatedTasks[index].completed = !updatedTasks[index].completed;
      console.log('Updated task:', updatedTasks[index]);
      return updatedTasks;
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }

}
