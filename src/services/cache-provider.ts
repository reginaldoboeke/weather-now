
interface SaveItemProps<T = any> {
  key: string;
  expiresIn: Date;
  data: T;
}

type CacheItem<T = any> = Omit<SaveItemProps<T>, 'key'>;

interface CacheProvider {
  save: (props: SaveItemProps) => void;
  get:<T> (key: string) => CacheItem<T> | null;
  getIfValid:<T> (key: string, dateToCompare?: Date) => CacheItem<T> | null;
}

const save = ({ key, expiresIn, data }: SaveItemProps): void => {
  try {
    const valueToStore = JSON.stringify({ expiresIn, data });
    localStorage.setItem(`@weathernow:cache.${key}`, valueToStore);
  } catch (error) {
    console.error(error);
  }
}

const get = (key: string) => {
  try {
    const data = localStorage.getItem(`@weathernow:cache.${key}`);
    if (!data) {
      return null;
    }
    return JSON.parse(data);

  } catch (error) {
    console.error(error);
  }
}

const getIfValid = (key: string, dateToCompare = new Date()) => {
  try {
    const cachedData = localStorage.getItem(`@weathernow:cache.${key}`);
    if (!cachedData) {
      return null;
    }


    const { expiresIn, data }: CacheItem = JSON.parse(cachedData);

    if (expiresIn && new Date(expiresIn).getTime() >= dateToCompare.getTime()) {
      return { data, expiresIn } as CacheItem;
    }

    return null;

  } catch (error) {
    console.error(error);
    return null;
  }
}

export const cacheProvider: CacheProvider = { save, get, getIfValid };
