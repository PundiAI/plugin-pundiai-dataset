export const getDatasetPageTemplate = `
## Purpose
Extract dataset search parameters from user queries with automatic validation and friendly guidance.
Given the most recent message only, extract information needed to perform dataset searches.


## Dataset Search Structure
A complete Search dataset object contains:
[
  {
    "contractAddress": "string (Ethereum address)",
     "tokenId": "string",
    "ownerAddress": "string (Ethereum address)",
    "datasetName": "string (repository/name format)",
    "permissions": "string (public/private)",
    "hash": "string (file hash)",
    "fileSize": "number (bytes)",
    "updateDt": "number (timestamp)",
  }
]"

## Search Parameters Structure
A complete dataset search object contains:
{
  "datasetName": "",           // Dataset name or partial match (empty for all)
  "address": "",               // Ethereum address (42 chars, empty if not specified)
  "addressType": 0,            // 0=user, 1=owner, 2=either
  "datasetDataType": "",       // Data type: "text","image","audio","video","tabular","multimodal"
  "datasetFormat": "",         // File format: ".csv",".json",".txt",".png",etc.
  "fileSizeStart": 0,          // Min size in bytes (default 0)
  "fileSizeEnd": 1000000,      // Max size in bytes (default 1MB)
  "permissions": "",           // "public","private" or empty for both
  "pageIndex": 1,              // Page number (1-based)
  "pageSize": 50               // Items per page (default 50)
}

## Extraction Rules
1. For basic queries, only extract explicitly mentioned fields with defaults
2. If user requests advanced search, extract all available filters
3. Return default values for unspecified fields
4. Validate address formats and enum values

## Examples
1. For "Find public datasets":
\`\`\`json
{
  "permissions": "public",
  "pageIndex": 1,
  "pageSize": 50
}
\`\`\`

2. For comprehensive search request:
\`\`\`json
{
  "datasetName": "finance",
  "address": "0xEF5c432D6FE9Da32ab71990F0133fa8a858B1DDf",
  "addressType": 1,
  "datasetDataType": "tabular",
  "datasetFormat": ".csv",
  "fileSizeStart": 10000,
  "fileSizeEnd": 500000,
  "permissions": "public",
  "pageIndex": 1,
  "pageSize": 20
}
\`\`\`

{{recentMessages}}
Analyze the LAST message only and extract search parameters based on:
1. The specificity of the request (basic or advanced search)
2. The available filters in the message
3. Return only the fields that can be determined with defaults
4. Provide validation errors for invalid inputs when appropriate`;