export interface CarouselProps {
  content: slideProps;
}

interface slideProps {
  a11yText: string;
  content: React.ReactNode;
  id?: string;
  key?: string;
}
