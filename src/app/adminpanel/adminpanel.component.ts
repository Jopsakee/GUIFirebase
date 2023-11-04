import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';
import { Storage,uploadBytesResumable,ref, getDownloadURL } from '@angular/fire/storage';


@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {
  public file: any = {};
  constructor(private serverService: ServerService,private route: ActivatedRoute,private router: Router, private Storage: Storage) { }
  chooseFile(event: any){
    this.file = event.target.files[0];
  }
  addData(){
    const storageRef = ref(this.Storage,`images/${this.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef,this.file);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
      if(!Number.isNaN(this.file.name)){
        alert('Added image to Firebase Storage.');
      }
      else{
        alert('No image selected.');
      }
    },
    () =>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => { 
        console.log('File available at' + downloadURL);
      });
    }
    
    )
    
  }

  
}
