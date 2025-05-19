import { describe, it, expect} from 'vitest';
import { getV1ViewQueryDatasetPage } from "../../src/utils/service";

describe('getDatasetPage', () => {
    it('should return formatted dataset data', async () => {
        const result = await getV1ViewQueryDatasetPage({
          "datasetName": "May.6.George",
          "pageIndex": 1,
          "pageSize": 20
        })

        expect(result).toEqual({
            "code": 200,
            "data": {
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
            },
            "msg": "success",
          });
    });
});
