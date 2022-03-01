export default interface PaginationProps {
  onClick: () => void;
  itemsPerPage: number;
  dataArray: [];
  startingPage: number;
}
