import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailManageDataComponent } from './detail-manage-data.component';

describe('DetailManageDataComponent', () => {
  let component: DetailManageDataComponent;
  let fixture: ComponentFixture<DetailManageDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailManageDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailManageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
