import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollectComponent } from './add-collect.component';

describe('AddCollectComponent', () => {
  let component: AddCollectComponent;
  let fixture: ComponentFixture<AddCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCollectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
