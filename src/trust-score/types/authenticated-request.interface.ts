/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

export interface AuthenticatedRequest {
  authUser: {
    id: string;
    email: string;
    type: 'access' | 'refresh' | 'api-key';
    jti?: string;
    apiKeyId?: string;
  };
  accessToken?: string;
  query: Record<string, string | string[] | undefined>;
}
