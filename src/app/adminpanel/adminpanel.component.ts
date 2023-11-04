import { Component } from '@angular/core';
import { Storage, uploadBytesResumable, ref, getDownloadURL } from '@angular/fire/storage';


@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {
  public file: any = {};
  constructor(private Storage: Storage) { }
  chooseFile(event: any) {
    this.file = event.target.files[0];
  }
  addData() {
    const storageRef = ref(this.Storage, `images/${this.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, this.file);

    uploadTask.on('state_changed', (snapshot) => {
    },
      (error) => {
        console.error('Error uploading the file:', error);
      },
      () => {
        alert('Added image to Firebase Storage.');

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at ' + downloadURL);
        });
      });
  }


}
