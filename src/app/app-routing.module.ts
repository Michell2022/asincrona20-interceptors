import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakingComponent } from './pages/breaking/breaking.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path:'home', component:HomeComponent },
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'**', component:BreakingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
