import { Injectable } from '@angular/core';
import {Todo} from './Todo';
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  todos:string[]=[];
  constructor() { }
  addTodo(todo:string):void{
    this.todos.push(todo);
   
  }
  listTodo():String[]{
    return this.todos;
  }
}
