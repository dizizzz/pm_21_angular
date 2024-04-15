import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuCourseComponent } from './top-menu-course.component';

describe('TopMenuCourseComponent', () => {
  let component: TopMenuCourseComponent;
  let fixture: ComponentFixture<TopMenuCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMenuCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopMenuCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
