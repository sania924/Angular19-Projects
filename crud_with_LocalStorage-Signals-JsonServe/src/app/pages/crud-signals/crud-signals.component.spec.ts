import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSignalsComponent } from './crud-signals.component';

describe('CrudSignalsComponent', () => {
  let component: CrudSignalsComponent;
  let fixture: ComponentFixture<CrudSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
