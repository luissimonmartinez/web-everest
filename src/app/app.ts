import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [Header, Header, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web-everest');
}
