/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

export class SessionDto {
  id: string;
  accessTokenJti: string;
  refreshTokenJti?: string;
  ipAddress?: string;
  userAgent?: string;
  isRevoked: boolean;
  expiresAt: Date;
  createdAt: Date;
  lastActivityAt: Date;
  revokedAt?: Date;
}

export class SessionsListDto {
  sessions: SessionDto[];
  activeCount: number;
  revokedCount: number;
}

export class RevokeSessionDto {
  message: string;
  sessionId: string;
}

export class RevokeAllSessionsDto {
  message: string;
  revokedCount: number;
}
