import { Component, ViewChild } from '@angular/core';
import { ServerService } from '../server.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { plants } from '../plants';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  plants : plants[] = [];
  @ViewChild('plantForm') form!: NgForm;
  plantname!: any;
  plantcountry!: any;
  plantdescription!: any;
  plantimage!: any;
  constructor(private serverService: ServerService, private router: Router) {}

  addPlant(): void{
    const newPlant = {...this.form.value} as plants;
    this.serverService.createPlant(newPlant)
      .subscribe(
        ((plants) => {
          this.router.navigate(['']);
        })
      )
  }
}