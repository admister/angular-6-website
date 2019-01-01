import { PricingModule } from './pricing.module';

describe('PricingModule', () => {
  let pricingModule: PricingModule;

  beforeEach(() => {
    pricingModule = new PricingModule();
  });

  it('should create an instance', () => {
    expect(pricingModule).toBeTruthy();
  });
});
