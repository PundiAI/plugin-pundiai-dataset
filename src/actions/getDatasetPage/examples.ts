export default [
    
    [
        {
            user: "{{user1}}",
            content: {
                text: "Find image datasets in PNG format"
            }
        },
        {
            user: "{{agent}}",
            content: {
                text: "Filtering image data...",
                action: "GET_DATASET_PAGE",
            }
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Show all datasets from 0x123..."
            }
        },
        {
            user: "{{agent}}",
            content: {
                text: "Retrieving address datasets...",
                action: "GET_DATASET_PAGE",
            }
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Find video datasets larger than 10MB"
            }
        },
        {
            user: "{{agent}}",
            content: {
                text: "Filtering large files...",
                action: "GET_DATASET_PAGE",
            }
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Show page 3 of public datasets, 100 items per page"
            }
        },
        {
            user: "{{agent}}",
            content: {
                text: "Loading public data...",
                action: "GET_DATASET_PAGE",
            }
        }
    ],

    [
        {
            user: "{{user1}}",
            content: {
                text: "Find multimodal datasets"
            }
        },
        {
            user: "{{agent}}",
            content: {
                text: "Searching multimodal data...",
                action: "GET_DATASET_PAGE",
            }
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Datasets"
            }
        },
        {
            user: "{{agent}}",
            content: {
                text: "Fetching default datasets...",
                action: "GET_DATASET_PAGE",
            }
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Show CSV files under 500KB"
            }
        },
        {
            user: "{{agent}}",
            content: {
                text: "Filtering small CSV files...",
                action: "GET_DATASET_PAGE",
            }
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "List datasets owned by 0xabc..."
            }
        },
        {
            user: "{{agent}}",
            content: {
                text: "Retrieving owner datasets...",
                action: "GET_DATASET_PAGE",
            }
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Find text datasets between 500KB and 2MB"
            }
        },
        {
            user: "{{agent}}",
            content: {
                text: "Filtering text datasets by size...",
                action: "GET_DATASET_PAGE",
            }
        }
    ]
]