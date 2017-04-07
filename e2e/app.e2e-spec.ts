import { Mcd3demoPage } from './app.po';

describe('mcd3demo App', () => {
  let page: Mcd3demoPage;

  beforeEach(() => {
    page = new Mcd3demoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
