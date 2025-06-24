import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css'
})
export class Converter {
  value: number = 0;
  result: string = '';
  selectedOption: string = 'CtoF';

    convert() {
    if (this.selectedOption === 'CtoF') {
      const fahrenheit = (this.value * 9/5) + 32;
      this.result = `${this.value}°C = ${fahrenheit.toFixed(2)}°F`;
    } else {
      const celsius = (this.value - 32) * 5/9;
      this.result = `${this.value}°F = ${celsius.toFixed(2)}°C`;
    }
  }
}
