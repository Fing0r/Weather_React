export interface IStats {
  [property: string]: number;
}

export interface StatsSchema {
  userStats: IStats;
}
