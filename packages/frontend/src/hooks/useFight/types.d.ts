export type UseFightOptions<T> = {
  data: T[];
  comparator: (player1: T, player2: T) => number;
};
