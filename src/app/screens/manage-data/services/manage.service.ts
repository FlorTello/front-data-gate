import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ManageModel } from '../models/manage';

@Injectable({
  providedIn: 'root',
})
export class ManageService {
  private readonly baseUrl = `${environment.api}manages`;
  public _allManages$: BehaviorSubject<ManageModel[]>;

  constructor(private httpClient: HttpClient) {
    this._allManages$ = new BehaviorSubject([]);
  }

  getAllManages(): Observable<ManageModel[]> {
    return this.httpClient.get<ManageModel[]>(this.baseUrl).pipe(
      map((data: any[]) => {
        const managesList: ManageModel[] = data.map(
          manage => new ManageModel(manage)
        );
        this._allManages$ = new BehaviorSubject<ManageModel[]>(managesList);
        // this._allManages$.next(Object.assign({}, managesList));
        return managesList;
      })
    );
  }

  loadAllManages() {
    this.httpClient.get<ManageModel[]>(this.baseUrl).subscribe(
      data => {
        const managesList: ManageModel[] = data.map(
          manage => new ManageModel(manage)
        );
        // this._allManages$.next(Object.assign({}, managesList));
        this._allManages$ = new BehaviorSubject<ManageModel[]>(managesList);
      },
      error => console.log('Could not load manages.')
    );
  }

  get AllManages1(): Observable<ManageModel[]> {
    return this._allManages$.asObservable();
  }

  get AllManages(): BehaviorSubject<ManageModel[]> {
    return this._allManages$;
  }

  getSpecificManage(id: number | string): Observable<ManageModel> {
    // this.loadAllManages();
    const tem = this.AllManages;
    return this._allManages$.pipe(
      map(manages => manages.find((manage: ManageModel) => manage.id == id))
    );
  }

  updateManage(newData: ManageModel): Observable<any> {
    const body = {
      id: newData.id,
      key_name: newData.keyName,
      description: newData.description,
      type: newData.type,
      possible_values: newData.possibleValues,
      sensitivity: newData.sensitivity,
    };
    return this.httpClient.put<ManageModel>(
      `${this.baseUrl}/${newData.id}`,
      body
    );
  }
}
