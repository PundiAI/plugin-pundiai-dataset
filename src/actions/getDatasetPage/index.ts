import { Action, HandlerCallback, IAgentRuntime, Memory, State, elizaLogger, composeContext, ModelClass, generateObjectDeprecated } from "@elizaos/core";
import examples from "./examples.ts";
import { getV1ViewQueryDatasetPage } from "../../utils/service"
import { GetV1ViewQueryDatasetPageQuery } from "../../utils/service/index.type.ts"
import { getDatasetPageTemplate } from "../../templates/getDatasetPage.ts"

export const getDatasetPage: Action = {
    name: "GET_DATASET_PAGE",
    description: "Get information about the dataset",
    similes: [],
    examples: examples,
    validate: async (_runtime: IAgentRuntime, message: Memory) => {
        return true
    },
    handler: async (runtime: IAgentRuntime, message: Memory, state?: State, _options?: { [key: string]: unknown; }, callback?: HandlerCallback): Promise<boolean> => {
        elizaLogger.log("Starting Moralis GET_DATASET_PAGE handler...");

        let currentState: State;
        if (!state) {
            currentState = (await runtime.composeState(message)) as State;
        } else {
            currentState = await runtime.updateRecentMessageState(state);
        }

        try {
            const statsContext = composeContext({
                state: currentState,
                template: getDatasetPageTemplate,
            });
            const content = (await generateObjectDeprecated({
                runtime,
                context: statsContext,
                modelClass: ModelClass.LARGE,
            })) as unknown as GetV1ViewQueryDatasetPageQuery;

            if (!content || typeof content !== "object") {
                throw new Error("Invalid response format from model");
            }

            const params = {
                ...(content.datasetName && { datasetName: content.datasetName }),
                ...(content.address && { address: content.address }),
                ...(content.addressType && { 
                  addressType: Number(content.addressType) 
                }),
                ...(content.datasetDataType && { 
                  datasetDataType: content.datasetDataType 
                }),
                ...(content.datasetFormat && { 
                  datasetFormat: content.datasetFormat 
                }),
                ...(content.permissions && { 
                  permissions: content.permissions 
                }),
                ...(content.fileSizeStart && { 
                    fileSizeStart: Number(content.fileSizeStart)
                  }),
                  ...(content.fileSizeEnd && { 
                    fileSizeEnd: Number(content.fileSizeEnd)
                  }),
                pageIndex: 1, 
                pageSize: 20,
              };

            elizaLogger.log("Request params:", params);

            const response = await getV1ViewQueryDatasetPage(params)

            const datasetData = response.data;

            if (callback) {

                if (datasetData.data.length <= 0){
                    callback({
                        text: "Here is the dataset not data.",
                        content: {
                            params,
                            datasetData
                        },
                    });
                    return true;
                }

                callback({
                    text: "Here is the dataset data: \n" + JSON.stringify(datasetData, null, 2),
                    content: {
                        params,
                        datasetData
                    },
                });
            }

            return true;
        } catch (error: unknown) {
            elizaLogger.error("Error in GET_DATASET_PAGE handler:", error);
            const errorMessage =
                error instanceof Error ? error.message : String(error);
            if (callback) {
                callback({
                    text: `Error fetching dataset data: ${errorMessage}`,
                    content: { error: errorMessage },
                });
            }

            return false;
        }
    }
}

