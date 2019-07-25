import { useEffect, useState } from 'react';
import { checkStatus } from '../services/kyc';
import * as Types from '../store/store.types';

type KycValidation = {
  userId: string;
  timeInterval?: number;
  conditions: number[];
};

type ResponseKyc = {
  statusId: Types.KycValidationStatusId;
  requestId: string | null;
};

const useValidationKyc = ({
  userId,
  timeInterval = 10000,
  conditions
}: KycValidation) => {
  const [{ statusId, requestId }, setKycStatus] = useState<ResponseKyc>({
    statusId: 0,
    requestId: null
  });

  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);

  const interval = () => {
    setTimeout(() => setCounter(counter + 1), timeInterval);
  };

  const check = async () => {
    try {
      const {
        kycStatusId = 0,
        requestId
      }: {
        kycStatusId: Types.KycValidationStatusId;
        requestId: string;
      } = await checkStatus({
        userId: userId
      });

      !conditions.includes(kycStatusId) && interval();

      return setKycStatus({ statusId: kycStatusId, requestId });
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    check();
  }, [counter]);

  return { error, statusId, requestId };
};

export default useValidationKyc;
