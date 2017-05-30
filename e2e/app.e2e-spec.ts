import { AnimationsProPage } from './app.po';

describe('animations-pro App', () => {
  let page: AnimationsProPage;

  beforeEach(() => {
    page = new AnimationsProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
