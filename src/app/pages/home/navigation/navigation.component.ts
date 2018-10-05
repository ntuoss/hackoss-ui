import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isAtTheTop = true;
  readonly navigationLinks: NavigationLink[] = [
    {
      text: 'Home',
      path: '/home',
      fragment: 'landing'
    },
    {
      text: 'About',
      path: '/home',
      fragment: 'about'
    },
    {
      text: 'Events',
      path: '/home',
      fragment: 'events'
    },
    {
      text: 'Location',
      path: '/home',
      fragment: 'location'
    },
    {
      text: 'Contact',
      path: '/home',
      fragment: 'contact'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isAtTheTop = (scrollOffset / window.innerHeight) < 0.4;
  }

}

interface NavigationLink {
  text: string;
  path: string;
  fragment?: string;
}
