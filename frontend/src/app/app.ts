import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  navLinks = [
    { path: '/', label: 'Trang chủ', exact: true },
    { path: '/biography', label: 'Tiểu sử', exact: false },
    { path: '/timeline', label: 'Timeline', exact: false },
    { path: '/gallery', label: 'Gallery', exact: false },
    { path: '/quiz', label: 'Quiz', exact: false },
    { path: '/about', label: 'Giới thiệu', exact: false },
  ];
}