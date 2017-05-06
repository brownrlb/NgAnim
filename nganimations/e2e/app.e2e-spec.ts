import { NganimationsPage } from './app.po';

describe('nganimations App', () => {
  let page: NganimationsPage;

  beforeEach(() => {
    page = new NganimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
