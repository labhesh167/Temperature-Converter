import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Converter } from './converter/converter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule,Converter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'temp-converter';
}
