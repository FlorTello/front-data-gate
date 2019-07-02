import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageModel } from '../../models/manage';
import { ManageService } from '../../services/manage.service';

@Component({
  selector: 'app-manage-edit',
  templateUrl: './manage-edit.component.html',
  styleUrls: ['./manage-edit.component.scss'],
})
export class ManageEditComponent implements OnInit {
  formEdit: FormGroup;
  selectedManage: ManageModel;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private manageService: ManageService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.manageService.loadAllManages();
    this.activatedRoute.data.subscribe((data: ManageModel) => {
      this.selectedManage = data['manage'];
      console.log(this.selectedManage);
    });

    this.formEdit = this.formBuilder.group({
      keyName: [this.selectedManage.keyName, Validators.required],
      description: [this.selectedManage.description, Validators.required],
      type: [this.selectedManage.type, Validators.required],
      sensitivity: [this.selectedManage.sensitivity.value],
    });
  }

  updateManage() {
    this.manageService
      .updateManage({
        id: this.selectedManage.id,
        keyName: this.formEdit.controls['keyName'].value,
        description: this.formEdit.controls['description'].value,
        type: this.formEdit.controls['type'].value,
        sensitivity: {
          value: this.formEdit.controls['sensitivity'].value,
          description: 'This is personal data, and cannot be ...',
          question: 'Is this personal data?',
        },
        possibleValues: this.selectedManage.possibleValues,
      })
      .subscribe(_ => {
        this.manageService.getAllManages().subscribe(_ => this.gotoManages());
      });
  }

  gotoManages() {
    const manageId = this.selectedManage ? this.selectedManage.id : null;
    this.router.navigate(['/manage/detail/', manageId], {
      relativeTo: this.activatedRoute,
    });
  }
}
