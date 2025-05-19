import { Plugin } from "@elizaos/core";
import { getDatasetDetails } from "./actions/getDatasetDetails/index.ts";
import { getDatasetPage } from "./actions/getDatasetPage/index.ts";

const pundiaiDatasetPlugin: Plugin = {
    name: "pundiai_dataset",
    description: "Plugin for interacting with pundiai dataset API to fetch data",
    actions: [getDatasetDetails, getDatasetPage],
};

export { pundiaiDatasetPlugin };

