import { Component, HostListener, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { NavBar } from '../../interfaces/nav-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navBarList: NavBar[] = [];
  currRoute: string = '';
  isNavOpen: boolean = false;
  wasClicked: boolean = false;

  constructor(private navBarService: NavBarService, private router: Router) {}

  ngOnInit(): void {
    this.navBarList = this.navBarService.navBarList;
    this.currRoute = this.router.url;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let nav = document.querySelector('.nav-bar') as HTMLElement;
    let link = document.querySelectorAll('.nav-bar-list-link-li');
    let linked = document.querySelectorAll('.nav-bar-list-link');
    let buttonText = document.querySelector(
      '.nav-bar-button-text'
    ) as HTMLElement;

    if (window.scrollY > nav.clientHeight) {
      nav.classList.remove('moved2-trans');
      nav.classList.add('moved2');
      buttonText.classList.remove('moved-icon-white');
      buttonText.classList.add('moved-icon-black');
      link.forEach((link) => {
        if (nav.classList.contains('moved2')) {
          link.classList.add('moved3');
        }
      });
      linked.forEach((link) => {
        if (nav.classList.contains('moved2')) {
          link.classList.add('moved4');
        }
      });
    } else if (window.scrollY === 0) {
      nav.classList.remove('moved2');
      nav.classList.add('moved2-trans');
      buttonText.classList.remove('moved-icon-black');
      buttonText.classList.add('moved-icon-white');
      link.forEach((link) => {
        if (link.classList.contains('moved3')) {
          link.classList.remove('moved3');
        }
      });
      linked.forEach((link) => {
        if (link.classList.contains('moved4')) {
          link.classList.remove('moved4');
        }
      });
    }
  }

  onClickScroll() {
    if (this.currRoute.slice(1) === '') {
      scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']);
    }
  }

  onClickToggleMenu() {
    this.isNavOpen = !this.isNavOpen;
    this.wasClicked = true;
  }
}
