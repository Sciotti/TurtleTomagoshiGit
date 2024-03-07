import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurtleComponent } from './turtle/turtle.component';

const routes: Routes = [
  { path: 'turtle', component: TurtleComponent },
  { path: '', redirectTo: '/turtle', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }