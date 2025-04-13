import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {

  constructor(private document: Document) { }

  smoothScrollTo(targetId: string): void {
    const targetElement = this.document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }

  preventDefault(event: Event): void {
    event.preventDefault();
  }

  isValidTargetId(targetId: string): boolean {
    return targetId !== '#';
  }
}