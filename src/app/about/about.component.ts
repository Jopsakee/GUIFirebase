import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutText$: BehaviorSubject<string> = new BehaviorSubject<string>('Customize your very own plant gallery on this website!');
  constructor(private router: Router) { }

  ngOnInit() {
    this.aboutText$.next('Customize your very own plant gallery on this website!');
  }

  sendEmail() {
    const recipientEmail = 'r0902342@student.thomasmore.be';
    const subject = 'Plant Gallery contact';
    const body = 'Hello,\n\nI would like to get in touch with you regarding Plant Gallery';
    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.open(mailtoUrl, '_blank');
    this.router.navigate(['/home']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
