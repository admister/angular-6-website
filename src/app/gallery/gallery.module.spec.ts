import { GalleryModule } from './gallery.module';

describe('GalleryModule', () => {
  let galleryModule: GalleryModule;

  beforeEach(() => {
    galleryModule = new GalleryModule();
  });

  it('should create an instance', () => {
    expect(galleryModule).toBeTruthy();
  });
});
