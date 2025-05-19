export default [
    [
        {
            user: "{{user1}}",
            content: {
                text: "I want to know the details of the dataset with token id 17764 and contract address 0xbE0f332E99a557DB16E0a4a827f873f0A03d6CfE.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Fetching dataset details...",
                action: "GET_DATASET_DETAILS",
            },
        },
    ],

    [
        {
            user: "{{user1}}",
            content: {
                text: "Get dataset 17764 at 0xbE0f332E99a557DB16E0a4a827f873f0A03d6CfE",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Retrieving data...",
                action: "GET_DATASET_DETAILS",
            },
        },
    ],

    [
        {
            user: "{{user1}}",
            content: {
                text: "Show me token 17764",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Fetching dataset (missing contract address)...",
                action: "GET_DATASET_DETAILS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "contract Address 0xbE0f332E99a557DB16E0a4a827f873f0A03d6CfE",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Fetching dataset (missing contract address)...",
                action: "GET_DATASET_DETAILS",
            },
        },
    ],
];