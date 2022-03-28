export interface CarouselProps {
  slideArray: SlideProps[];
}

export interface SlideProps {
  content: SlideContentProps;
  a11yText?: string;
  id?: string;
  key?: string;
}

export interface SlideContentProps {
  title?: string;
  subtitle?: string;
  bgImg?: string;
}
