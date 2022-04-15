// Default ErrorResponse interface
export interface ErrorResponse {
  statusCode: string | number;
  message: string;
}

export function instanceOfErrorResponse(err: unknown): err is ErrorResponse {
  return true;
}

// helper function to remove white spaces before/between/after words in a string
export function trimWhiteSpace(str: string): string {
  return str.replace(/\s/g, '');
}
