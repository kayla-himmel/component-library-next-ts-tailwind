export interface DropdownProps {
  data: DropdownData[];
  title: string;
}

interface DropdownData {
  id: string | number;
  label: string;
}
