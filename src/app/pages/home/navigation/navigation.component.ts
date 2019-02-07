import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isAtTheTop = true;
  readonly navigationLinks: NavigationLink[] = [
    { text: 'Home', fragment: 'landing' },
    { text: 'About', fragment: 'about' },
    { text: 'Events', fragment: 'events' },
    { text: 'Location', fragment: 'location' },
    { text: 'Contact', fragment: 'contact' }
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isAtTheTop = scrollOffset / window.innerHeight < 0.2;
  }

  goTo(path: string, fragment: string) {
    this.router.navigateByUrl(path, { fragment });
  }

  scrollTo(fragment: string) {
    document.querySelector(`#${fragment}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

interface NavigationLink {
  text: string;
  path?: string;
  fragment?: string;
}
