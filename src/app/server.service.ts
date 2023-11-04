import { Injectable } from '@angular/core';
import { Firestore, collection, CollectionReference, collectionData, addDoc, DocumentData, doc, DocumentReference, deleteDoc, updateDoc, DocumentSnapshot, docData } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { plants } from './plants';
import { users } from './users';
import { admin } from './auth/admin';

@Injectable()
export class ServerService {

  constructor(private firestore: Firestore) {}

  plants : plants[] = [];
  users: users[] = [];
  getPlants(): Observable<plants[]>{
    return collectionData<plants>(
      collection(this.firestore,'plants') as CollectionReference<plants>,
      {idField: 'id'});
  }

  getUsers(): Observable<users[]>{
    return collectionData<users>(
      collection(this.firestore,'users') as CollectionReference<users>,
      {idField: 'email'});
  }

  deletePlant(id:string){
    const plantRef = doc(this.firestore, 'plants/'+id) as DocumentReference<plants>;
    return from(deleteDoc(plantRef));
  }

  deleteUser(id:string){
    const userRef = doc(this.firestore, 'users/'+id) as DocumentReference<plants>;
    return from(deleteDoc(userRef));
  }

  updatePlant(plants: plants, id: string){
    const plantRef = doc(this.firestore, 'plants/'+id) as DocumentReference<plants>;
    return from(updateDoc(plantRef, plants as { [key: string]: any }));
  }

  createPlant(newplants: plants){
    const plantsCollection = collection(this.firestore, 'plants');
    return from(addDoc(plantsCollection, newplants));
  }

  detailPlant(id: string){
    const plantRef = doc(this.firestore, 'plants/'+id) as DocumentReference<plants>;
    return plantRef;
  }
  
  getAdmin(uid:string | null) {
    return docData<admin>( 
      doc(this.firestore,'/administrators/' + uid) as DocumentReference<admin>);
  }
}




 