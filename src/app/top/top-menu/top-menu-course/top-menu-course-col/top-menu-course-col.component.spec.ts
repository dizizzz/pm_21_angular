import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuCourseColComponent } from './top-menu-course-col.component';

describe('TopMenuCourseColComponent', () => {
  let component: TopMenuCourseColComponent;
  let fixture: ComponentFixture<TopMenuCourseColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMenuCourseColComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopMenuCourseColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
