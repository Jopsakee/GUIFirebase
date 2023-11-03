import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PlantdetailComponent } from './plantdetail/plantdetail.component';

const routes: Routes = [{ path: '', component: HomeComponent },{ path: 'add', component: AddComponent },{ path: 'edit/:id', component: EditComponent },{ path: 'plantdetail/:id', component: PlantdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
