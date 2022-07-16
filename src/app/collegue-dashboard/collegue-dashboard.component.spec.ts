import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueDashboardComponent } from './collegue-dashboard.component';

describe('CollegueDashboardComponent', () => {
  let component: CollegueDashboardComponent;
  let fixture: ComponentFixture<CollegueDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegueDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegueDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
