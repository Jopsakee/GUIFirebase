import { Component } from '@angular/core';
import { ServerService } from '../server.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  plantForm: FormGroup;

  constructor(private serverService: ServerService) {
    this.plantForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      image: new FormControl(''),
    });
  }

  addPlant() {
    if (this.plantForm.valid) {
      this.serverService
        .addPlantToFirebase(this.plantForm.value)
        .then(() => {
          console.log('Plant added to Firebase successfully');
          this.plantForm.reset();
        })
        .catch((error) => {
          console.error('Error adding plant to Firebase:', error);
        });
    }
  }
}
