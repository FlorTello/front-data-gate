import { Injectable } from '@angular/core';
import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ManageModel } from '../models/manage';
import { ManageService } from './manage.service';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DetailManageResolverService implements Resolve<ManageModel> {
  constructor(private manageService: ManageService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Observable<never> {
    const manageId = route.paramMap.get('id');

    return this.manageService.getSpecificManage(manageId).pipe(
      take(1),
      mergeMap(manage => {
        if (manage) {
          return of(manage);
        } else {
          // id not found
          this.router.navigate(['/manage']);
          return EMPTY;
        }
      })
    );
  }
}
