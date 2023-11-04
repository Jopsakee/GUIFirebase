import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { plants } from '../plants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  plantSubscription!: Subscription;
  plants: plants[] = [];
  sortAscending = true;
  constructor(private router: Router, private serverService: ServerService) { }

  ngOnInit(): void {
    this.plants = [];
    this.onGetPlants();
  }
  onGetPlants() {
    this.plantSubscription = this.serverService.getPlants()
      .subscribe(plants => {
        console.log(plants);
        this.plants = plants;
      })
  }

  deletePlant(id: any) {
    if (confirm("Are you sure you want to delete this plant?")) {
      this.serverService.deletePlant(id);
      this.router.navigate(['/home']);
    }
  }
  toggleSortOrder() {
    this.sortAscending = !this.sortAscending;
    this.sortPlants();
  }

  sortPlants() {
    this.plants.sort((a, b) => {
      if (this.sortAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }
  navigateToEditPage(plantId: string) {
    this.router.navigate(['/edit', plantId]);
  }
  navigateToPlantDetail(plantId: any) {
    this.router.navigate(['/plantdetail/', plantId]);
  }
}