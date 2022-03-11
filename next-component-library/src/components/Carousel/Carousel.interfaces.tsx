export interface CarouselProps {
  slideArray: slideProps[];
}

interface slideProps {
  a11yText: string;
  content: slideContent;
  id?: string;
  key?: string;
}

interface slideContent {
  title?: string;
  image?: string;
  caption?: string;
}
