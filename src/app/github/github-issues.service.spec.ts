/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GithubIssuesService } from './github-issues.service';

describe('GithubIssuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubIssuesService]
    });
  });

  it('should ...', inject([GithubIssuesService], (service: GithubIssuesService) => {
    expect(service).toBeTruthy();
  }));
});
