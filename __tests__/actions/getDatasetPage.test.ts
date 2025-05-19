import { describe, it, expect, vi, beforeEach, } from 'vitest';
import { elizaLogger, ModelClass, generateObjectDeprecated, composeContext } from '@elizaos/core';
import { getDatasetPage } from "../../src/actions/getDatasetPage";

describe('getDatasetPage action', () => {
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

    it('should fetch and format dataset data', async () => {

        vi.mocked(generateObjectDeprecated).mockResolvedValueOnce({
            "datasetName": "May.6.George",
            "pageIndex": 1,
            "pageSize": 20
          });

        await getDatasetPage.handler(mockRuntime, mockMessage, mockState, {}, mockCallback);

        expect(mockCallback).toMatchSnapshot();
    })
});