import { GHIssuesPage } from './app.po';

describe('gh-issues App', function() {
  let page: GHIssuesPage;

  beforeEach(() => {
    page = new GHIssuesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
