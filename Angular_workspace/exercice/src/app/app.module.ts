import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectsListComponent } from './collects-list/collects-list.component';
import { CollectDetailsComponent } from './collect-details/collect-details.component';
import { ErrorComponent } from './error/error.component';
import { AddCollectComponent } from './add-collect/add-collect.component';
import { UpdateCollectComponent } from './update-collect/update-collect.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CollectsListComponent,
    CollectDetailsComponent,
    ErrorComponent,
    AddCollectComponent,
    UpdateCollectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
