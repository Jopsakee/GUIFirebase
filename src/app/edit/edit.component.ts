import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { plants } from '../plants';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../auth/auth.guard';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, CanComponentDeactivate {
  plants: plants[] = [];
  @ViewChild('plantForm') form!: NgForm;
  plantname!: any;
  plantcountry!: any;
  plantdescription!: any;
  plantimage!: any;
  saved!: boolean;
  submitClicked: boolean = false;
  constructor(private serverService: ServerService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.saved = false;
    this.submitClicked = false;
  }
  updatePlant() {
    this.serverService.updatePlant(this.form.value, this.route.snapshot.params['id']);
    this.saved = true;
    this.router.navigate(['/home']);
  }

  onSubmit() {
    this.submitClicked = true;
    this.updatePlant();
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.saved && !this.submitClicked) {
      return confirm('Do you want to discard your changes?');
    }
    return true;
  }
}
