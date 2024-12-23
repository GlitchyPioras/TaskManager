import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css'],
})
export class DisplayTasksComponent {
  @Input() tasks: { task: string; date: string; isHappy: boolean | null }[] = [];
  @Output() taskDeleted = new EventEmitter<number>();
  @Output() moodChanged = new EventEmitter<{ index: number; isHappy: boolean }>();
  @Input() textColor:string = "";
  @Input() backgroundColor:string = "";
  @Input() listItemColor:string = "";
  @Input() ButtonColor:string = "";
  @Input() labelColor:string = "";

  deleteTask(index: number) {
    this.taskDeleted.emit(index);
  }

 
  setMood(index: number, isHappy: boolean) {
    this.moodChanged.emit({ index, isHappy });
  }
}
