import { vi } from 'vitest';

vi.mock('@elizaos/core', () => ({
  generateObjectDeprecated: vi.fn(),
  composeContext: vi.fn(),
  elizaLogger: {
    log: vi.fn(),
    debug: vi.fn(),
    error: vi.fn(),
    success: vi.fn(),
  },
  ModelClass: {
    LARGE: 'large'
  }
}));
