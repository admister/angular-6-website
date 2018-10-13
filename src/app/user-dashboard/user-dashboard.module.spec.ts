import { UserDashboardModule } from './user-dashboard.module';

describe('UserDashboardModule', () => {
  let userDashboardModule: UserDashboardModule;

  beforeEach(() => {
    userDashboardModule = new UserDashboardModule();
  });

  it('should create an instance', () => {
    expect(userDashboardModule).toBeTruthy();
  });
});
