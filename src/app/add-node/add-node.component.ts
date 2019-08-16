import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';
@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.css']
})
export class AddNodeComponent {
Todo=[];
constructor(private todoservice:TodoserviceService){

}
onSubmit(event:any){
this.todoservice.addTodo(event.target.task.value);
}
}
