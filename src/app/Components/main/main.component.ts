import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone: true,
})
export class MainComponent {
  darkMode: boolean = true;

  setDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.style.background = this.darkMode ? '#222' : '#fff';
    document.body.style.color = this.darkMode ? '#fff' : '#000';
  }

  count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }
}
