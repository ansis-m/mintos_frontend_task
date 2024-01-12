import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWithRemoveIconComponent } from './item-with-remove-icon.component';

describe('ItemWithRemoveIconComponent', () => {
  let component: ItemWithRemoveIconComponent;
  let fixture: ComponentFixture<ItemWithRemoveIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemWithRemoveIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemWithRemoveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
