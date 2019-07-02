import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
import { ManageModel } from '../../models/manage';
import { ManageService } from '../../services/manage.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.scss'],
})
export class ManageDataComponent implements OnInit, AfterViewChecked {
  constructor(private manageService: ManageService, private router: Router) {}
  KeyNameList: any[];
  managesList$: ManageModel[];

  ngOnInit() {
    // this.manageService.loadAllManages();
    // this.managesList$ = this.manageService.AllManages1;
    this.manageService.getAllManages().subscribe((data: ManageModel[]) => {
      this.managesList$ = data;
    });
  }

  ngAfterViewChecked() {
    // this.managesList$ = this.manageService.getAllManages();
  }
}
