import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PlantdetailComponent } from './plantdetail/plantdetail.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeguestComponent } from './homeguest/homeguest.component';
import { AdminpanelComponent} from './adminpanel/adminpanel.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { CanDeactivateGuard } from './auth/can-deactivate.guard';


const routes: Routes = [
{ path: '', component: HomeguestComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [] },
{ path: 'add', component: AddComponent, canActivate: [AuthGuard]},
{ path: 'edit/:id', component: EditComponent, canDeactivate:[CanDeactivateGuard]},
{ path: 'plantdetail/:id', component: PlantdetailComponent, canActivate: [AuthGuard]},
{ path: 'signup', component: SignupComponent },
{ path: 'login', component: LoginComponent },
{ path: 'adminpanel', component: AdminpanelComponent, canActivate: [AdminGuard,AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
