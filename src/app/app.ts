import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    FormsModule,
    CommonModule  
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'HospitalManagementSystem';
  someValue: string = "";
  someValues: Array<string> = new Array<string>();
  CallSomeLogic(){
    this.someValues.push(this.someValue);
    this.someValue='';
  }
}
