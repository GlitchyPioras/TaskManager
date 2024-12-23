import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  @Output() themeChanged = new EventEmitter<string>();
  @Input() textColor:string = "";
  @Input() backgroundColor:string = "";
  @Input() listItemColor:string = "";
  @Input() ButtonColor:string = "";
  @Input() labelColor:string = "";


  changeTheme(theme: string) {
    this.themeChanged.emit(theme);  
    
  }
}

