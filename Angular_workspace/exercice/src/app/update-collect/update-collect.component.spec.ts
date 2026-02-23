import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCollectComponent } from './update-collect.component';

describe('UpdateCollectComponent', () => {
  let component: UpdateCollectComponent;
  let fixture: ComponentFixture<UpdateCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCollectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
