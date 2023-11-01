import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  plants: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchPlants();
  }

  fetchPlants() {
    this.http.get<any[]>('http://localhost:3000/api/plants').subscribe(
      (response) => {
        this.plants = response.map((plant) => {
          plant.image = String.fromCharCode.apply(null, plant.image.data);
          return plant;
        });
      },
      (error) => {
        console.error('Failed to fetch plants:', error);
      }
    );
  }
  navigateToEditPage(plantId: number) {
    this.router.navigate(['/plantedit', plantId]);
  }
  navigateToPlantDetail(plantId: number) {
    this.router.navigate(['/plant', plantId]);
  }
}