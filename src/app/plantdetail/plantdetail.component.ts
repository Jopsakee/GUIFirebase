import { Component } from '@angular/core';
import { plants } from '../plants';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-plantdetail',
  templateUrl: './plantdetail.component.html',
  styleUrls: ['./plantdetail.component.css']
})
export class PlantdetailComponent {
  
  constructor(private route: ActivatedRoute, private router: Router, private serverService: ServerService) {}
  plantSubscription!: Subscription;
  plants : plants[] = [];
  ngOnInit(): void{
    const plantId = this.route.snapshot.params['id'];
    if (plantId !== null) {
      this.detailPlant(plantId);
      this.onGetPlants();
      console.log(plants);
    console.log(plantId);
    } else {
    }
  }
  
  onGetPlants() {
    this.plantSubscription = this.serverService.getPlants()
      .subscribe(plants => {
        console.log(plants);
        this.plants = plants;
      })
  }

  detailPlant(id: string){
    this.serverService.detailPlant(id);
  }
}
