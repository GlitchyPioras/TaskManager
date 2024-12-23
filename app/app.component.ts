import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Task_tab: { task: string; date: string; isHappy: boolean }[] = [];

  handler = true;

  addTask(newTask: string) {
    if (newTask.trim() !== '') {
      const taskWithDate = {
        task: newTask,
        date: new Date().toLocaleString(),
        isHappy: false,
      };
      this.Task_tab.push(taskWithDate);
      this.saveData();
    }
  }

  deleteTask(index: number) {
    this.Task_tab.splice(index, 1);
    this.saveData();
  }

  updateMood(index: number, isHappy: boolean) {
    this.Task_tab[index].isHappy = isHappy;
    this.saveData();
  }

  saveData() {
    localStorage.setItem('tasks', JSON.stringify(this.Task_tab));
    localStorage.setItem('theme', this.currentTheme);
  }

  loadData() {
    const data = localStorage.getItem('tasks');
    const savedTheme = localStorage.getItem('theme');

    if (data) {
      this.Task_tab = JSON.parse(data);
    }

    if (savedTheme && this.themes[savedTheme]) {
      this.currentTheme = savedTheme;
      this.applyTheme();
    } else {
      this.applyTheme(); 
    }
  }

  constructor() {
    this.loadData();
  }

  HandlerHandling() {
    this.handler = !this.handler;
  }

  currentTheme: string = 'Paleta1';

  themes: { [key: string]: { textColor: string; backgroundColor: string; listItemColor: string; ButtonColor: string; labelColor: string } } = {
    'Paleta1': { 
      textColor: 'white', 
      backgroundColor: '#212529', 
      listItemColor: 'black', 
      ButtonColor: '#6c757d', 
      labelColor: 'white' 
    },
    'Paleta2': { 
      textColor: '#4C585B', 
      backgroundColor: '#7E99A3', 
      listItemColor: '#4C585B', 
      ButtonColor: '#F4EDD3', 
      labelColor: '#F4EDD3' 
    },
    'Paleta3': { 
      textColor: '#F5EFFF', 
      backgroundColor: '#e7c1f5', 
      listItemColor: '#F5EFFF', 
      ButtonColor: '#A294F9', 
      labelColor: '#A294F9' 
    },
    'Paleta4': { 
      textColor: 'gray', 
      backgroundColor: '#A59D84', 
      listItemColor: 'gray', 
      ButtonColor: '#C1BAA1', 
      labelColor: '#D7D3BF' 
    },
    'Paleta5': { 
      textColor: '#FFF0DC', 
      backgroundColor: '#131010', 
      listItemColor: '#FFF0DC', 
      ButtonColor: '#543A14', 
      labelColor: '#F0BB78' 
    },
    'Paleta6': { 
      textColor: '#1A1A1D', 
      backgroundColor: '#3B1C32', 
      listItemColor: '#1A1A1D', 
      ButtonColor: '#6A1E55', 
      labelColor: '#A64D79' 
    },
    'Paleta7': { 
      textColor: '#EEEEEE', 
      backgroundColor: '#9B7EBD', 
      listItemColor: '#EEEEEE', 
      ButtonColor: '#3B1E54', 
      labelColor: '#D4BEE4' 
    },
    'Paleta8': { 
      textColor: '#EEEEEE', 
      backgroundColor: '#201E43', 
      listItemColor: '#EEEEEE', 
      ButtonColor: '#508C9B', 
      labelColor: '#134B70' 
    },
    'Paleta9': { 
      textColor: '#686D76', 
      backgroundColor: '#DC5F00', 
      listItemColor: '#686D76', 
      ButtonColor: '#373A40', 
      labelColor: '#EEEEEE' 
    },
  };

  changeTheme(theme: string) {
    if (this.themes[theme]) {
      this.currentTheme = theme;
      this.applyTheme();
      this.saveData();
    } 
  }

  applyTheme() {
    const colors = this.themes[this.currentTheme];
    if (colors) {
      document.body.style.backgroundColor = colors.backgroundColor;
      document.body.style.color = colors.textColor;

      const buttons = document.querySelectorAll('button');
      buttons.forEach((btn) => {
        (btn as HTMLElement).style.backgroundColor = colors.ButtonColor;
        (btn as HTMLElement).style.color = colors.labelColor;
      });
    } 
  }

  get currentColors() {
    return this.themes[this.currentTheme];
  }
}
