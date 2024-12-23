import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  New_Task: string = ''; 

  @Output() taskAdded = new EventEmitter<string>();
  @Input() textColor:string = "";
  @Input() backgroundColor:string = "";
  @Input() listItemColor:string = "";
  @Input() ButtonColor:string = "";
  @Input() labelColor:string = "";

  addTask() {
    if (this.New_Task.trim()) {
      this.taskAdded.emit(this.New_Task); 
      this.New_Task = '';
    }
  }
}
