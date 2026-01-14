import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {

  isResponsive: boolean = false;
  showOptionsMenu: boolean = false;

  ngOnInit() {
    this.checkResponsive();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkResponsive();
  }

  private checkResponsive() {
    this.isResponsive = window.innerWidth <= 900;
  }

  showOptions() {
    this.isResponsive = !this.isResponsive;
  }

}
