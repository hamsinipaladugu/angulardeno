import { Component, OnInit } from '@angular/core';

import { Todo } from '../Todo';
import { TodoserviceService } from '../todoservice.service';
@Component({
  selector: 'app-list-node',
  templateUrl: './list-node.component.html',
  styleUrls: ['./list-node.component.css']
})
export class ListNodeComponent implements OnInit {

  todos:String[]=[];
  constructor(private todoService:TodoserviceService) { }
  
  ngOnInit() {
    this.todos = this.todoService.listTodo();
  }

}
