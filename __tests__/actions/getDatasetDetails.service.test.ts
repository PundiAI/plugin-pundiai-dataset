import { describe, it, expect} from 'vitest';
import { getV1ViewQueryDatasetDetails } from "../../src/utils/service";

describe('getDatasetDetails', () => {
    it('should return formatted details data', async () => {
        const result = await getV1ViewQueryDatasetDetails({
            tokenId: '17764',
            contractAddress: '0xbE0f332E99a557DB16E0a4a827f873f0A03d6CfE',
          })

        expect(result).toEqual({
            "code": 200,
            "data": {
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
            },
            "msg": "success",
          });
    });
});
