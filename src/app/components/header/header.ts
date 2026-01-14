import { Component, HostListener, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnInit {

  isResponsive: boolean = false;
  showIconHamburguesa: boolean = false;

  ngOnInit() {
    this.checkResponsive();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkResponsive();
  }

  private checkResponsive() {
    this.isResponsive = window.innerWidth <= 900;
    this.showIconHamburguesa = window.innerWidth <= 900;
  }

  showOptions() {
    this.isResponsive = !this.isResponsive;
  }

}
