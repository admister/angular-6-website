import { NotfoundModule } from './notfound.module';

describe('NotfoundModule', () => {
  let notfoundModule: NotfoundModule;

  beforeEach(() => {
    notfoundModule = new NotfoundModule();
  });

  it('should create an instance', () => {
    expect(notfoundModule).toBeTruthy();
  });
});
