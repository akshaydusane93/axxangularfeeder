import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUrlsComponent } from './get-urls.component';

describe('GetUrlsComponent', () => {
  let component: GetUrlsComponent;
  let fixture: ComponentFixture<GetUrlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUrlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
