export interface CarouselProps {
  slideArray: SlideContentProps[];
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
  image?: string;
  id?: string;
  className?: string;
}
