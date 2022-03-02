export type RowItem = {
  key: string;
  translationKey: string;
  defaultMessage: string;
};

export type UnitCardProps<T> = {
  data: T;
  titleKey: string;
  rows: RowItem[];
  highlighted?: boolean;
};
