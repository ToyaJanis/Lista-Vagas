import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'nova',
    component: AddItemComponent,
  },
  {
    path: 'vagas',
    component: ListComponent,
  },
  { path: '', redirectTo: '/vagas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
