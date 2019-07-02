import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ListRequestsComponent } from '../../components/list-requests/list-requests.component';
import { tabList } from '../../data/tab-list';
import { RequestModel } from '../../models/request.model';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  requestList: RequestModel[];
  filteredRequestList = [];
  @ViewChild('requestcontainer', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;

  tabList = tabList;
  activeTab = tabList[0];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private requestService: RequestService
  ) {}

  ngOnInit() {
    this.requestService.getAllRequest().subscribe(data => {
      this.requestList = data;
      this.createComponent(this.requestList);
    });
  }

  filterData(status): Request[] {
    if (!status) {
      this.filteredRequestList = this.requestList;
      return;
    }
    this.filteredRequestList = this.requestList.filter(
      request => request.status === status
    );
  }

  getFilteredData() {
    return this.filteredRequestList;
  }

  selectTab(tab) {
    this.activeTab = tab;
    this.filterData(tab.typeRequest);
    this.createComponent(this.getFilteredData());
  }

  createComponent(data: RequestModel[]) {
    this.entry.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      ListRequestsComponent
    );
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.data = data;
  }
}
