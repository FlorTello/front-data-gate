import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './screens/requets/containers/requests/requests.component';
import { ReviewsComponent } from './screens/reviews/containers/reviews/reviews.component';
import { ManageDataComponent } from './screens/manage-data/containers/manage-data/manage-data.component';
import { DetailManageDataComponent } from './screens/manage-data/containers/detail-manage-data/detail-manage-data.component';
import { DetailManageResolverService } from './screens/manage-data/services/detail-manage-resolver.service';
import { ManageEditComponent } from './screens/manage-data/containers/manage-edit/manage-edit.component';

const routes: Routes = [
  { path: '', component: ReviewsComponent },
  { path: 'review', component: ReviewsComponent },
  { path: 'request', component: RequestsComponent },
  {
    path: 'manage',
    component: ManageDataComponent,
    children: [
      {
        path: 'detail/:id',
        component: DetailManageDataComponent,
        resolve: {
          manage: DetailManageResolverService,
        },
      },
      {
        path: 'edit/:id',
        component: ManageEditComponent,
        resolve: {
          manage: DetailManageResolverService,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
