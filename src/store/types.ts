export type CalendarDateType = {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
};

export type GameDataType = {
  gameID: number;
  game_uuid: string;
  sport_name?: string;
  gameUTCDateTime: string;
  venueName?: string;
  venueCity?: string;
  venueState?: string;
  homeTeamId: number;
  home_uuid: string;
  home_team_name?: string;
  home_team_market?: string;
  home_team_abbr?: string;
  homeTeamIcon?: string;
  homeRecord?: string;
  awayTeamId: number;
  away_uuid: string;
  away_team_name?: string;
  away_team_market?: string;
  away_team_abbr?: string;
  awayTeamIcon?: string;
  awayRecord?: string;
  standingUpdatedLast?: string;
  boxscoreUpdatedLast?: string;
  status: string;
  inning?: string;
  inning_half?: string;
  outs?: string;
  balls?: string;
  strikes?: string;
  runnerBase1?: boolean;
  runnerBase2?: boolean;
  runnerBase3?: boolean;
  home_runs?: string;
  home_hits?: string;
  home_errors?: string;
  away_runs?: string;
  away_hits?: string;
  away_errors?: string;
  quarter?: string;
  period?: string;
  overtime?: string;
  clock?: string;
  home_points?: string;
  away_points?: string;
  possession_team_abbr?: string;
  situation_clock?: boolean;
  situation_down?: string;
  situation_yfd?: string;
  location_team_abbr?: string;
  location_yardline?: string;
  odds_generated_at_orig?: string;
  odds_generated_at_last?: string;
  moneyline_open_outcome_home?: string;
  moneyline_open_outcome_away?: string;
  run_line_open_spread_home?: string;
  run_line_open_spread_away?: string;
  run_line_open_outcome_home?: string;
  run_line_open_outcome_away?: string;
  spread_open_spread_home?: string;
  spread_open_spread_away?: string;
  spread_open_outcome_home?: string;
  spread_open_outcome_away?: string;
  total_open_total?: string;
  total_open_outcome_over_odds?: string;
  total_open_outcome_over_total?: string;
  total_open_outcome_under_odds?: string;
  total_open_outcome_under_total?: string;
  moneyline_last_outcome_home?: string;
  moneyline_last_outcome_away?: string;
  run_line_last_spread_home?: string;
  run_line_last_spread_away?: string;
  run_line_last_outcome_home?: string;
  run_line_last_outcome_away?: string;
  spread_last_spread_home?: string;
  spread_last_spread_away?: string;
  spread_last_outcome_home?: string;
  spread_last_outcome_away?: string;
  total_last_total?: string;
  total_last_outcome_over_odds?: string;
  total_last_outcome_over_total?: string;
  total_last_outcome_under_odds?: string;
  total_last_outcome_under_total?: string;
  algRatingHomeWin?: number;
  algRatingHomeWinPct?: number;
  algRatingAwayWin?: number;
  algRatingAwayWinPct?: number;
  algRatingCalcGreenOver?: number;
  algRatingCalcGreenSpread?: number;
  algRatingCalcGreenSpreadAway?: number;
  algRatingCalcGreenUnder?: number;
  algRatingCalcGreenWin?: number;
  algRatingCalcGreenWinAway?: number;
  algRatingCalcSuperOver?: number;
  algRatingCalcSuperSpread?: number;
  algRatingCalcSuperSpreadAway?: number;
  algRatingCalcSuperUnder?: number;
  algRatingCalcSuperWin?: number;
  algRatingCalcSuperWinAway?: number;
  algRatingCalcYellowOver?: number;
  algRatingCalcYellowSpread?: number;
  algRatingCalcYellowSpreadAway?: number;
  algRatingCalcYellowUnder?: number;
  algRatingCalcYellowWin?: number;
  algRatingCalcYellowWinAway?: number;
  algRatingHomeSpread?: number;
  algRatingHomeSpreadPct?: number;
  algRatingMoneySpread?: number;
  algRatingMoneyTotal?: number;
  algRatingMoneyWin?: number;
  algRatingAwaySpread?: number;
  algRatingAwaySpreadPct?: number;
  algRatingOver?: number;
  algRatingOverPct?: number;
  algRatingPredAwaySpread?: number;
  algRatingPredHomeSpread?: number;
  algRatingPredTotal?: number;
  algRatingUnder?: number;
  algRatingUnderPct?: number;
  algWinnerHomeSpread?: boolean;
  algWinnerHomeWin?: boolean;
  algWinnerOver?: boolean;
  algRatingUpdatedLast?: string;
  bFreeOffer: boolean;
  statusId: number;
  dateTimeUpdated?: string;
};

export const getImage =
  <T extends object, U extends keyof T>(obj: T) =>
  (key: U) =>
    obj[key];

export type FeedbackType = {
  uid: string | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  comments: string;
};
