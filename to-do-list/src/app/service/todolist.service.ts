import { Injectable } from '@angular/core';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor() { }

  get(){
    if (typeof window !== 'undefined' && window.localStorage) {
      return JSON.parse(localStorage.getItem("tasks") || '[]');
    } 
    else {
      return [];
    }
  }

  set(items1:any[])
  {
    localStorage.setItem("tasks",JSON.stringify(items1));
  }
}
