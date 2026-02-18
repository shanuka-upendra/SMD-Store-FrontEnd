import { Component,signal } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Sidebar } from "./page/sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
  protected readonly title = signal('smd-store');
}
