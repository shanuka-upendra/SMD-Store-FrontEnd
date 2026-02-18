import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
