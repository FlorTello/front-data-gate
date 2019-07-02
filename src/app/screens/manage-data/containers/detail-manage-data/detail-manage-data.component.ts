import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageService } from '../../services/manage.service';
import { ManageModel } from '../../models/manage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Sensitivity } from '../../models/sensitivity';

@Component({
  selector: 'app-detail-manage-data',
  templateUrl: './detail-manage-data.component.html',
  styleUrls: ['./detail-manage-data.component.scss'],
})
export class DetailManageDataComponent implements OnInit {
  constructor(
    private manageService: ManageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  private manageId: string;
  private selectedManage: ManageModel;

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: ManageModel) => {
      this.selectedManage = data['manage'];
      console.log(this.selectedManage);
    });
  }

  iditManage() {
    //   this.router.navigate['manage/edit', {id:}]
  }
}
