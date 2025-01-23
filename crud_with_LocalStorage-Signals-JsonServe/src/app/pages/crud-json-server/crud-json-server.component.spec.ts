import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudJsonServerComponent } from './crud-json-server.component';

describe('CrudJsonServerComponent', () => {
  let component: CrudJsonServerComponent;
  let fixture: ComponentFixture<CrudJsonServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudJsonServerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudJsonServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
