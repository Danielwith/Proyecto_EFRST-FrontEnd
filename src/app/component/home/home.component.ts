import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.backToTop();
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        setTimeout(() => {
          this.actionToTop();
        }, 100);
      }
    });
  }

  constructor(private router: Router) {}

  backToTop() {
    const element = document.querySelector('.back-to-top') as HTMLElement;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        element.style.display = 'block';
        element.classList.add('animate__fadeInUp');
        element.classList.remove('animate__fadeOutDown', 'animate__faster');
      } else {
        element.classList.add('animate__fadeOutDown', 'animate__faster');
        element.classList.remove('animate__fadeInUp');
      }
    });

    element.addEventListener('click', () => {
      this.actionToTop();
    });
  }

  actionToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
