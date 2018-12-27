import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBlockComponent } from './feature-block.component';

describe('FeatureBlockComponent', () => {
  let component: FeatureBlockComponent;
  let fixture: ComponentFixture<FeatureBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
