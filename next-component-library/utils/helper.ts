// Default ErrorResponse interface
export interface ErrorResponse {
  statusCode: string | number;
  message: string;
}

export function instanceOfErrorResponse(err: unknown): err is ErrorResponse {
  return true;
}

function convertPixelsToRem(pixel: number, basefont: number) {
  const rem = pixel / basefont;
  return `${rem}rem`;
}
export default convertPixelsToRem;
