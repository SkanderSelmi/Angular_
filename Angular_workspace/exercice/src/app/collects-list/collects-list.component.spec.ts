import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectsListComponent } from './collects-list.component';

describe('CollectsListComponent', () => {
  let component: CollectsListComponent;
  let fixture: ComponentFixture<CollectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
