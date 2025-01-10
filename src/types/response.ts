export type ResponseDTO<T> = {
  data: T;
  message: string;
  status: string;
};
