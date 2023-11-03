import { Component, ViewChild } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { plants } from '../plants';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  plants : plants[] = [];
  @ViewChild('plantForm') form!: NgForm;
  plantname!: any;
  plantcountry!: any;
  plantdescription!: any;
  plantimage!: any;
  constructor(private serverService: ServerService, private router: Router, private route: ActivatedRoute) {}

  updatePlant(){
    this.serverService.updatePlant(this.form.value,this.route.snapshot.params['id']);
    this.router.navigate(['']);
  }
}
