import { Action, HandlerCallback, IAgentRuntime, Memory, State, elizaLogger, composeContext, ModelClass, generateObjectDeprecated } from "@elizaos/core";
import examples from "./examples.ts";
import { getV1ViewQueryDatasetDetails } from "../../utils/service"
import { GetV1ViewQueryDatasetDetailsQuery } from "../../utils/service/index.type.ts"
import { getDatasetDetailsTemplate } from "../../templates/getDatasetDetails";

export const getDatasetDetails: Action = {
    name: "GET_DATASET_DETAILS",
    description: "Get data set details by token id and contract address",
    similes: [],
    examples: examples,
    validate: async (_runtime: IAgentRuntime, message: Memory) => {
        return true
    },
    handler: async (runtime: IAgentRuntime, message: Memory, state?: State, _options?: { [key: string]: unknown; }, callback?: HandlerCallback): Promise<boolean> => {
        elizaLogger.log("Starting Moralis GET_DATASET_DETAILS handler...");

        let currentState: State;
        if (!state) {
            currentState = (await runtime.composeState(message)) as State;
        } else {
            currentState = await runtime.updateRecentMessageState(state);
        }

        try {
            const statsContext = composeContext({
                state: currentState,
                template: getDatasetDetailsTemplate,
            });
            const content = (await generateObjectDeprecated({
                runtime,
                context: statsContext,
                modelClass: ModelClass.LARGE,
            })) as unknown as GetV1ViewQueryDatasetDetailsQuery;

            if (!content || typeof content !== "object") {
                throw new Error("Invalid response format from model");
            }

            if (!content.tokenId || content.tokenId === 'null') {
                throw new Error("Please provide the Token ID for this contract");
            }

            if (!content.contractAddress || content.contractAddress === 'null') {
                throw new Error("Please provide the contract address");
            }

            const params = {
                tokenId: content.tokenId ,
                contractAddress: content.contractAddress
            };

            elizaLogger.log("Request params:", params);

            const response = await getV1ViewQueryDatasetDetails(params)

            const detailsData = response.data;

            if (callback) {
                callback({
                    text: "Here are the dataset details: \n" + JSON.stringify(detailsData, null, 2),
                    content: {
                        params,
                        detailsData
                    },
                });
            }

            return true;
        } catch (error: unknown) {
            elizaLogger.error("Error in GET_DATASET_DETAILS handler:", error);
            const errorMessage =
                error instanceof Error ? error.message : String(error);
            if (callback) {
                callback({
                    text: `Error fetching dataset details: ${errorMessage}`,
                    content: { error: errorMessage },
                });
            }

            return false;
        }
    }
}

