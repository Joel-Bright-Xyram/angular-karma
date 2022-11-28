import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';

import { StudentComponent } from './student.component';
import { of } from 'rxjs';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let deb: DebugElement;
  let h2: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [StudentService],
      imports: [HttpClientModule], // imports: [AppRoutingModule, HttpClientModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;
    h2 = fixture.nativeElement.querySelector('h2');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('SpyOn method - original', () => {
    spyOn(component, 'calculate');
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  });

  it('SpyOn method - 1', () => {
    spyOn(component, 'calculate').and.returnValues(10, 20);
    let result = component.StudentResult();
    expect(result).toEqual('Fail');
  });

  it('SpyOn method - 2', () => {
    spyOn(component, 'calculate').and.returnValues(40, 20);
    let result = component.StudentResult();
    expect(result).toEqual('Pass');
  });

  it('SpyOn method - 3', () => {
    let service = fixture.debugElement.injector.get(StudentService);
    spyOn(service, 'SaveDetails').and.callFake(() => {
      return of({
        result1: 200,
      });
    });
    component.saveData();
    expect(component.result).toEqual({
      result1: 200,
    });
  });

  it('Verify the h2 element Value', () => {
    component.StudentSchoolResult();
    fixture.detectChanges();
    expect(h2.textContent).toBe(component.studentResult);
  });

  it('Increase count on click', () => {
    const h1 = deb.query(By.css('h1'));
    const btn = deb.query(By.css('#btnIncreaseNumber'));

    console.log(h1.nativeElement.innerText);
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    console.log(h1.nativeElement.innerText);

    expect(component.countNumber.toString()).toEqual(
      h1.nativeElement.innerText
    );
  });
});
