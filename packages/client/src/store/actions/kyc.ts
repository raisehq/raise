import {
  setAddress,
  setInformation,
  uploadFiles,
  checkStatus
} from '../../services/kyc';

import { KycRegistration, KycValidationStatusId } from '../store.types';

export default (dispatch: any, state: any) => {
  const { auth } = state;
  const checkStatusLastKyc = async () => {
    const {
      kycStatusId,
      requestId
    }: {
      kycStatusId: KycValidationStatusId;
      requestId: string;
    } = await checkStatus({
      userId: auth.id
    });

    return dispatch({
      type: 'CHECK_KYC_STATUS',
      data: { statusId: kycStatusId, requestId }
    });
  };
  const sendRegistration = async (data: KycRegistration) => {
    try {
      const uploadFilesProm = uploadFiles({
        userId: auth.id,
        data: data.verification
      });
      const { address, address2, city, country, cp } = data.information;
      const addressProm = setAddress({
        datajson: {
          address,
          address2,
          city,
          country,
          cp
        },
        country_id: country,
        addresstype_id: 1,
        herouser_id: auth.id
      });

      const [uploadResp, addressResp] = await Promise.all([
        uploadFilesProm,
        addressProm
      ]);
      const kycResponse = await setInformation({
        herouser_id: auth.id,
        kycdetailjson: { ...data.information, ...{ uploadResp } },
        userdetailaddress_id: addressResp.id
      });

      return dispatch({ type: 'KYC_SENDED', kycResponse });
    } catch (error) {
      return dispatch({ type: 'KYC_ERROR' });
    }
  };
  return { sendRegistration, checkStatusLastKyc };
};
