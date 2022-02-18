// Default ErrorResponse interface
export interface ErrorResponse {
  statusCode: string | number;
  message: string;
}

export function instanceOfErrorResponse(err: unknown): err is ErrorResponse {
  return true;
}
