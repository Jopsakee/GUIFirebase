import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Plant } from './plant.model';

@Injectable()
export class ServerService {
  plant$: Observable<Plant[]>; // Use the Plant interface for your data

  constructor(private firestore: Firestore) {
    const plantsCollection = collection(firestore, 'plants');
    
    // Use the map operator to cast the data to the Plant type
    this.plant$ = collectionData(plantsCollection).pipe(
      map((data: any[]) => {
        return data.map(item => item as Plant);
      })
    );
  }
  addPlantToFirebase(plantData: Plant): Promise<any> {
    const plantsCollection = collection(this.firestore, 'plants');
    return addDoc(plantsCollection, plantData);
  }
}




 