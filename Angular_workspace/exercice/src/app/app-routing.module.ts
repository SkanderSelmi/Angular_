import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectsListComponent } from './collects-list/collects-list.component';
import { CollectDetailsComponent } from './collect-details/collect-details.component';
import { UpdateCollectComponent } from './update-collect/update-collect.component';
import { AddCollectComponent } from './add-collect/add-collect.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'list',          
    pathMatch: 'full' },
  { path: 'list',                           
    component: CollectsListComponent },
  { path: 'details/:id',                   
    component: CollectDetailsComponent },
  { path: 'update/:param',                 
    component: UpdateCollectComponent },
  { path: 'add',
    component: AddCollectComponent },
  { path: '**',                            
    component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
