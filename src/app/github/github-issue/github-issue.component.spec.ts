/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GithubIssueComponent } from './github-issue.component';

describe('GithubIssueComponent', () => {
  let component: GithubIssueComponent;
  let fixture: ComponentFixture<GithubIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
