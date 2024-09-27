import { CommonModule} from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TodolistService } from '../service/todolist.service';


@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})





export class ToDoListComponent implements OnInit {

constructor(private tasks: TodolistService){};


task:string="";
found:string="";

items:{task:string,iscompleted:boolean}[]=[];


isCompleted:boolean=false;
isEditing:boolean=false;
ngOnInit(): void {
  this.items = this.tasks.get();
}

add()
{
  let f=0;
  if(this.task!="")
     {
      this.items.find(data=>{
        if(data.task==this.task)
        {
          this.found="Task Already Exist";
          f=1;
        }
      })
      if(f==0)
      {
        this.items.push({ task: this.task, iscompleted : false});
        this.task="";
        this.tasks.set(this.items);
        this.found="";
      }
      
     }
  }

n:number=0;
  edit(index:number)
  {
    this.task=this.items[index].task;
    this.isEditing=true;
    this.n=index;
    
  }

  update()
  {
    this.isEditing=false;
    this.items[this.n].task=this.task;
    this.task="";
    this.tasks.set(this.items);

  }
  

  del(i:any){
    this.items.splice(i,1);
    this.tasks.set(this.items);
  }


check1(item : {task : string ,iscompleted : boolean})
{
  item.iscompleted = !item.iscompleted;
  this.tasks.set(this.items);
}


}
