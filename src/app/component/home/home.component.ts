import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.backToTop();
  }

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
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}
