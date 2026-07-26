import { Logger } from '@nestjs/common';

const logger = new Logger('EnvironmentValidation');

const REQUIRED_ENV_VARS = ['DATABASE_URL', 'JWT_SECRET', 'JWT_REFRESH_SECRET'] as const;

/** Minimum acceptable secret length (32 chars = 256 bits), enforced in production. */
const JWT_MIN_LENGTH = 32;

const JWT_SECRET_VARS: ReadonlyArray<string> = ['JWT_SECRET', 'JWT_REFRESH_SECRET'];

export function validateEnvironment(): void {
  const missing: string[] = [];

  for (const key of REQUIRED_ENV_VARS) {
    if (!process.env[key]) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    logger.error(
      `Fatal: Missing required environment variables:\n` +
        missing.map((k) => `  - ${k}`).join('\n') +
        `\n\nPlease set them in .env or .env.local before starting the application.`,
    );
    process.exit(1);
  }

  // Validate JWT secrets meet minimum length requirement (production only)
  if (process.env.NODE_ENV === 'production') {
    for (const key of JWT_SECRET_VARS) {
      const value = process.env[key];
      if (value && value.length < JWT_MIN_LENGTH) {
        logger.error(
          `Fatal: ${key} is too short (${value.length} chars). ` +
            `Provide a random string of at least ${JWT_MIN_LENGTH} characters (256 bits).`,
        );
        process.exit(1);
      }
    }
  }
}
