enum TOOLTIP_STYLE {
  BUTTON = 'button',
  TEXT = 'text',
}

export interface TooltipComponentProps {
  id: string;
  children: string;
  styleAs: TOOLTIP_STYLE;
}
