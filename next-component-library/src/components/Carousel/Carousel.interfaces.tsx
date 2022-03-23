export interface CarouselProps {
  slideArray: SlideProps[];
}

interface SlideProps {
  a11yText: string;
  content: SlideContentProps;
  id?: string;
  key?: string;
}

export interface SlideContentProps {
  title?: string;
  subtitle?: string;
  bgImg?: string;
}
