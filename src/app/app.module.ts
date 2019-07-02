import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatTabsModule,
  MatTableModule,
  MatCardModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ReviewsComponent } from './screens/reviews/containers/reviews/reviews.component';
import { RequestsComponent } from './screens/requets/containers/requests/requests.component';
import { ManageDataComponent } from './screens/manage-data/containers/manage-data/manage-data.component';
import { ListRequestsComponent } from './screens/requets/components/list-requests/list-requests.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailManageDataComponent } from './screens/manage-data/containers/detail-manage-data/detail-manage-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageEditComponent } from './screens/manage-data/containers/manage-edit/manage-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ReviewsComponent,
    RequestsComponent,
    ManageDataComponent,
    ListRequestsComponent,
    DetailManageDataComponent,
    ManageEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  entryComponents: [ListRequestsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
