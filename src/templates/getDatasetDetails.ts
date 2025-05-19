export const getDatasetDetailsTemplate = `
## Purpose
Extract dataset details from user queries with automatic validation and friendly guidance.
Given the most recent message only, extract information needed to fetch dataset details.

## Dataset Details Structure
A complete dataset details object contains:
{
  "contractAddress": "string (Ethereum address)",
  "tokenId": "string",
  "ownerAddress": "string (Ethereum address)",
  "datasetName": "string (repository/name format)",
  "permissions": "string (public/private)",
  "hash": "string (file hash)",
  "fileSize": "number (bytes)",
  "updateDt": "number (timestamp)",
  "createDt": "number (timestamp)",
  "fileFormatList": ["array of strings"],
  "taskTypeList": ["array of strings"],
  "languageList": ["array of strings"],
  "dataTypeList": ["array of strings"],
  "license": "string",
  "source": "string (e.g. huggingface)",
  "numberOfRows": "number"
}

## Extraction Rules
1. For basic queries, only extract contractAddress and tokenId
2. If user requests full details, extract all available fields
3. Return null for any missing fields

## Examples
1. For "Get dataset 17764 at 0xbE0f332E99a557DB16E0a4a827f873f0A03d6CfE":
\`\`\`json
{
  "contractAddress": "0xbE0f332E99a557DB16E0a4a827f873f0A03d6CfE",
  "tokenId": "17764"
}
\`\`\`

2. For full details request:
\`\`\`json
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
}
\`\`\`

{{recentMessages}}
Analyze the LAST message only and extract dataset details based on:
1. The specificity of the request (basic or full details)
2. The available information in the message
3. Return only the fields that can be determined
4. Provide null for missing fields with guidance when appropriate`;