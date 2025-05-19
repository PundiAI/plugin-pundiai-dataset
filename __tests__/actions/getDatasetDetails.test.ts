import { describe, it, expect, vi, beforeEach, } from 'vitest';
import { elizaLogger, ModelClass, generateObjectDeprecated, composeContext } from '@elizaos/core';
import { getDatasetDetails } from "../../src/actions/getDatasetDetails";

describe('getDatasetDetails action', () => {
    const mockRuntime = {
        composeState: vi.fn(),
        updateRecentMessageState: vi.fn(),
        getPluginConfig: vi.fn(),
    };

    const mockMessage = {};
    const mockState = {};
    const mockCallback = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();

        // Mock runtime functions
        mockRuntime.composeState.mockResolvedValue(mockState);
        mockRuntime.updateRecentMessageState.mockResolvedValue(mockState);
        mockRuntime.getPluginConfig.mockResolvedValue({});

        // Mock the core functions
        vi.mocked(elizaLogger.log).mockImplementation(() => {});
        vi.mocked(elizaLogger.error).mockImplementation(() => {});
        vi.mocked(elizaLogger.success).mockImplementation(() => {});
        vi.mocked(composeContext).mockReturnValue({});
    });

    it('should fetch and format details data', async () => {

        vi.mocked(generateObjectDeprecated).mockResolvedValueOnce({
            tokenId: '17764',
            contractAddress: '0xbE0f332E99a557DB16E0a4a827f873f0A03d6CfE',
          });

        await getDatasetDetails.handler(mockRuntime, mockMessage, mockState, {}, mockCallback);

        expect(mockCallback).toMatchSnapshot();
    })
});