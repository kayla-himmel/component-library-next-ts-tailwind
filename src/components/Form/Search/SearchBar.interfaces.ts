export interface SearchProps {
  addLabelAbove?: boolean; //default is false - no label above input
  label: string; //screenreader label and default placeholder as well as top label
  placeholder?: string | null; //label by default - set to custom string or null for none
  onClick?: () => void;
  value?: string;
  onChange: () => void;
}
