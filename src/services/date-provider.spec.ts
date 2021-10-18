import { dateProvider } from './date-provider';

describe('dateProvider', () => {
  it('should add minutes at date', () => {
    const currentMinutes = 10;
    const minutesToAdd = 7;

    const date = new Date(2021, 9, 17, 20, currentMinutes);
    const dateWithAddedMinutes = dateProvider.addMinutes(minutesToAdd, date);

    expect(dateWithAddedMinutes.getMinutes()).toEqual(currentMinutes + minutesToAdd);
  });

  it('should get difference between dates in minutes', () => {
    const dateAMinutes = 20;
    const dateBMinutes = 5;
    const dateA = new Date(2021, 9, 17, 20, dateAMinutes);
    const dateB = new Date(2021, 9, 17, 20, dateBMinutes);

    const diffMintues = dateProvider.diffMinutes(dateA, dateB);

    expect(diffMintues).toEqual(dateAMinutes - dateBMinutes);
  });
});
