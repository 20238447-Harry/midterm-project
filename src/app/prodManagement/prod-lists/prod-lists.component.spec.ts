import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListsComponent } from './prod-lists.component';

describe('ProdListsComponent', () => {
  let component: ProdListsComponent;
  let fixture: ComponentFixture<ProdListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
