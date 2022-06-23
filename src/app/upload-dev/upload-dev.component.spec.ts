import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDevComponent } from './upload-dev.component';

describe('UploadDevComponent', () => {
  let component: UploadDevComponent;
  let fixture: ComponentFixture<UploadDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
