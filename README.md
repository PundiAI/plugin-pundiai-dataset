# @elizaos/plugin-pundiai-dataset

Plugin for interacting with pundiai dataset API to fetch data

## Description

The Plugin Pundiai Dataset provides interfaces to fetch real-time dataset data

## Installation

```bash
pnpm install @elizaos/plugin-pundiai-dataset
```

## Usage

```typescript
import { pundiaiDatasetPlugin } from "@elizaos/plugin-pundiai-dataset";

// Initialize the plugin
const plugin = pundiaiDatasetPlugin;
```

## Actions

### GET_DATASET_DETAILS

Get dataset details

Examples:

- "Get dataset 17764 at 0xbE0f332E99a557DB16E0a4a827f873f0A03d6CfE"
- "Here are the dataset details: 
{
  "contractAddress": "0xbE0f332E99a557DB16E0a4a827f873f0A03d6CfE",
  "tokenId": "17764",
  "ownerAddress": "0x5d43dEDC405183DAD609c27BF7e7B0f2225A2B22",
  "datasetName": "May.6.George",
  "permissions": "public",
  "hash": "",
  "fileSize": 0,
  "updateDt": 1746498788217,
  "createDt": 1746498788217,
  "fileFormatList": [],
  "taskTypeList": [],
  "languageList": [],
  "dataTypeList": [],
  "license": "other",
  "source": "",
  "numberOfRows": 0
}"

### GET_DATASET_PAGE

Get dataset data

Examples:

- "I want to query the dataset May.6.George information"
- "Here is the dataset data: 
{
  "data": [
    {
      "contractAddress": "0xbE0f332E99a557DB16E0a4a827f873f0A03d6CfE",
      "tokenId": "17764",
      "ownerAddress": "0x5d43dEDC405183DAD609c27BF7e7B0f2225A2B22",
      "datasetName": "May.6.George",
      "permissions": "public",
      "hash": "",
      "fileSize": 0,
      "updateDt": 1746498788217
    }
  ],
  "currentPageNo": 1,
  "totalCount": 1,
  "totalPage": 1,
  "pageSize": 20
}"


## License

MIT