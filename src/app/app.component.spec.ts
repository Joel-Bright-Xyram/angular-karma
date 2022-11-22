import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Addition } from './Calculator';

describe('AppComponent', () => {
  let component = new AppComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-karma'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-karma');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'angular-karma app is running!'
    );
  });

  it('should check if true equals true', () => {
    expect(true).toBe(true);
  });

  it('should check the alert message', () => {
    var msg = 'Hello World!';
    expect(component.ShowMessage(msg)).toBe(msg);
  });

  it('should test the Addition result', () => {
    expect(Addition(10, 20)).toBeGreaterThanOrEqual(20);
  });

  it('should validate ToBe and toEqual correctly for numbers', () => {
    var num1 = 1;
    var num2 = 1;
    expect(num1).toBe(num2);
    expect(num1).toEqual(num2);
  });
  it('should validate ToBe and toEqual correctly for strings', () => {
    var a = 'Hello';
    var b = 'Hello';
    expect(a).toBe(b);
    expect(a).toEqual(b);
  });
  it('should validate ToBe and toEqual correctly for arrays', () => {
    var arr1 = [1];
    var arr2 = [1];
    expect(arr1).not.toBe(arr2);
    expect(arr1).toEqual(arr2);
  });
  it('should validate ToBe(true) and ToBeTrue() correctly', () => {
    var a = true;
    var b = false;
    expect(a).toBe(true);
    expect(a).toBeTrue();
    expect(b).toBeFalse();
  });
  it('should validate ToBeFalsy() and ToBeTruthy() correctly', () => {
    var a = true;
    var b = false;
    expect(a).toBeTruthy();
    expect('1').toBeTruthy();
    expect(1).toBeTruthy();
    expect(b).toBeFalsy();
    expect(0).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(undefined).toBeFalsy();
  });
  it('shoud check toBeGreater set of Matchers', () => {
    var a = 5;
    expect(a).toBeGreaterThan(4);
    expect(a).not.toBeGreaterThan(5);
    expect(a).toBeGreaterThanOrEqual(5);
  });
  it('shoud check toBeLesser set of Matchers', () => {
    var a = 5;
    expect(a).toBeLessThan(6);
    expect(a).not.toBeLessThan(5);
    expect(a).toBeLessThanOrEqual(5);
  });
  it('shoud check toMatch Jasmine Matcher', () => {
    var input = 'Some YouTube video tutorial';
    var strPhoneNo = '001-425-777-8000';
    expect(input).toMatch(/YouTube/);
    expect(input).toMatch(/YouTube/i);
    expect(input).not.toMatch(/Yout/);
    expect(strPhoneNo).toMatch(/\d{3}-\d{3}-\d{3}-\d{4}/);
  });
  it('shoud check toBeCloseTo Jasmine Matcher', () => {
    var pi = 3.145926;
    var e = 2.78;
    expect(pi).not.toBeCloseTo(e);
    expect(pi).toBeCloseTo(e, 0);
    expect(e).toBeCloseTo(2.783);
    expect(e).toBeCloseTo(2.785, 1);
    expect(4.334).toBeCloseTo(4.3345, 2);
    expect(4.334).not.toBeCloseTo(4.3, 2);
    expect(4.223).not.toBeCloseTo(4.22, 3);
    expect(4.223).not.toBeCloseTo(4.22, 4);
  });

  it('shoud check toBeDefined Jasmine Matcher', () => {
    var MyObj = { foo: 'foo' };
    var MyFunction = (function () {})();
    var strUndefined;
    expect('Tutorial').toBeDefined();
    expect(MyObj).toBeDefined();
    expect(MyObj.foo).toBeDefined();
    expect(MyFunction).not.toBeDefined();
    expect(strUndefined).not.toBeDefined();
  });

  it('shoud check toBeUndefined Jasmine Matcher', () => {
    var MyObj = { foo: 'foo' };
    var MyFunction = (function () {})();
    var strUndefined;
    expect('Tutorial').not.toBeUndefined;
    expect(MyObj).not.toBeUndefined();
    expect(MyObj.foo).not.toBeUndefined();
    expect(MyFunction).toBeUndefined();
    expect(strUndefined).toBeUndefined();
  });

  it('shoud check toBeNull Jasmine Matcher', () => {
    var nullValue = null;
    var valueUndefined;
    var notNull = 'Not null';
    expect(null).toBeNull;
    expect(nullValue).toBeNull();
    expect(valueUndefined).not.toBeNull();
    expect(notNull).not.toBeNull();
  });

  it('shoud check toContain Jasmine Matcher', () => {
    var MyArray = ['Jasmine', 'Youtube', 'Tutorial'];
    expect([1, 2, 3]).toContain(2);
    expect([1, 2, 3]).toContain(2, 3);
    expect(MyArray).toContain('Jasmine');
    expect([1, 2, 3]).not.toContain(4);
    expect(MyArray).not.toContain('Video');
  });

  it('shoud check toContain Jasmine Matcher', () => {
    var MyArray = ['Jasmine', 'Youtube', 'Tutorial'];
    expect([1, 2, 3]).toContain(2);
    expect([1, 2, 3]).toContain(2, 3);
    expect(MyArray).toContain('Jasmine');
    expect([1, 2, 3]).not.toContain(4);
    expect(MyArray).not.toContain('Video');
  });

  it('shoud check toBeNan Jasmine Matcher', () => {
    expect(0 / 0).toBeNaN();
    expect(0 / 5).not.toBeNaN();
  });

  it('shoud check toBePositiveInfinity Jasmine Matcher', () => {
    expect(1 / 0).toBePositiveInfinity();
  });

  it('shoud check toBeNegativeInfinity Jasmine Matcher', () => {
    expect(-1 / 0).toBeNegativeInfinity();
  });

  var comp: AppComponent | null;

  beforeEach(function () {
    console.log('Before Each');
    comp = new AppComponent();
  });

  it('test 1', () => {
    console.log('test 1');
  });

  it('test 2', () => {
    console.log('test 2');
  });

  it('test 3', () => {
    console.log('test 3');
  });

  it('Increase Count', () => {
    if (comp !== null) {
      comp.IncreaseCount(2);
      expect(comp.count).toEqual(12);
    }
    console.log('Increase');
  });

  it('Decrease Count', () => {
    if (comp !== null) {
      comp.DecreaseCount(2);
      expect(comp.count).toEqual(8);
    }
    console.log('Decrease');
  });

  afterEach(function () {
    comp = null;
    console.log('After Each');
  });
});
