export enum ActionType {
  TOGGLE_THEME = 'TOGGLE_THEME'
}

export interface ThemeAction {
  type: ActionType.TOGGLE_THEME;
  payload: string;
}

export type Action = ThemeAction;
