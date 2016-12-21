import { NgSandboxPage } from './app.po';

describe('ng-sandbox App', function() {
  let page: NgSandboxPage;

  beforeEach(() => {
    page = new NgSandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
