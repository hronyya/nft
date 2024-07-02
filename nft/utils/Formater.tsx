interface CollectionFeatures {
  [key: string]: string;
}

export default function parseCollectionFeatures(
  str: string,
): CollectionFeatures {
  return str
    .split('/')
    .reduce(
      (acc: CollectionFeatures, curr: string, index: number, arr: string[]) => {
        if (index % 2 === 0) {
          acc[curr] = arr[index + 1] || '';
        }
        return acc;
      },
      {},
    );
}
