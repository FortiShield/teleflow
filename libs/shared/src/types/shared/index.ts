export type CustomDataType = { [key: string]: string | string[] | boolean | number | undefined };

export const TELEFLOW_ENCRYPTION_SUB_MASK = 'nvsk.';

export type EncryptedSecret = `${typeof TELEFLOW_ENCRYPTION_SUB_MASK}${string}`;

export interface IResponseError {
  error: string;
  message: string;
  statusCode: number;
}
