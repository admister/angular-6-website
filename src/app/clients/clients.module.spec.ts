import { ClientsModule } from './clients.module';

describe('ClientsModule', () => {
  let clientsModule: ClientsModule;

  beforeEach(() => {
    clientsModule = new ClientsModule();
  });

  it('should create an instance', () => {
    expect(clientsModule).toBeTruthy();
  });
});
