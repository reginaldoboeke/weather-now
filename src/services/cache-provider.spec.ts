import { cacheProvider } from './cache-provider';

describe('cacheProvider', () => {
  it('should save item in the local storage', () => {
    const dataToStore = {
      key: 'test-save-key',
      data: 'test-save-data',
      expiresIn: new Date('2021-10-17 22:00:00'),
    };

    const saved = cacheProvider.save(dataToStore);

    expect(saved).toBe(true);
  });

  it('should get item from local storage', () => {
    const dataToStore = {
      key: 'test-save-key',
      data: 'test-save-data',
      expiresIn: new Date('2021-10-17 22:00:00'),
    };

    cacheProvider.save(dataToStore);

    const storedData = cacheProvider.get(dataToStore.key);

    expect(storedData?.data).not.toBe(null);
    expect(storedData?.data).toBe(dataToStore.data);
  });

  it('should not get item from local storage if invalid', () => {
    const dataToStore = {
      key: 'test-save-key',
      data: 'test-save-data',
      expiresIn: new Date('2021-10-17 22:00:00'),
    };

    cacheProvider.save(dataToStore);

    const storedData = cacheProvider.getIfValid(dataToStore.key, new Date('2021-10-17 22:00:01'));

    expect(storedData).toBe(null);
  });

  it('should get item from local storage if is valid', () => {
    const dataToStore = {
      key: 'test-save-key',
      data: 'test-save-data',
      expiresIn: new Date('2021-10-17 22:00:00'),
    };

    cacheProvider.save(dataToStore);

    const storedData = cacheProvider.getIfValid(dataToStore.key, new Date('2021-10-17 21:30:00'));

    expect(storedData).not.toBe(null);
    expect(storedData?.data).toEqual(dataToStore.data);
  });
})