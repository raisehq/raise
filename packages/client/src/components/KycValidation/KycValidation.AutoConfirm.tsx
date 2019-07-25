// TODO ONLY FOR INTEGRATION MODE
import React from 'react';
import { getHost } from '../../utils/index';
import axios from 'axios';
import { Button, Card, Input } from 'semantic-ui-react';
import qs from 'qs';
import { AutoConfirmStyled } from './KycValidation.styles';

const VERIFICATION = `${getHost('CORE')}/kyc/request/verification`;
const LOGINAUTH = `${getHost('AUTH')}/oauth/token`;

const getToken = async () => {
  const config: any = {
    url: LOGINAUTH,
    method: 'POST',
    data: qs.stringify({
      grant_type: 'client_credentials',
      client_id: 'KycClient',
      client_secret: '*aQq$V#kNAf7kULn',
      response_type: 'code'
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  try {
    const resp = await axios(config);
    switch (resp.status) {
      case 200:
      case 201:
        return resp.data ? resp.data.accessToken : '';
        break;
      default:
        throw new Error('[DEBUG] Call oauth problem.');
        break;
    }
  } catch (error) {
    throw new Error(error.message || '[DEBUG] Call oauth problem.');
  }
};

const validateKyc = async ({
  token,
  kycId,
  status
}: {
  token: string;
  kycId: string;
  status: string;
}) => {
  const config: any = {
    url: VERIFICATION,
    method: 'POST',
    data: qs.stringify({
      kyc_request_id: kycId,
      status,
      response: '{"passport": "BA123456", "Country": "Islandia"}'
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      authorization: `Bearer ${token}`
    }
  };

  try {
    const resp = await axios(config);
    switch (resp.status) {
      case 200:
      case 201:
        return resp.data ? resp.data : {};
      default:
        return null;
    }
  } catch (error) {
    throw new Error(error.message || '[DEBUG] Call validateKyc.');
  }
};

const AutoConfirm = ({ kycId }: any) => {
  const onClick = (status: string) => async () => {
    try {
      const token = await getToken();
      await validateKyc({ token, kycId, status });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AutoConfirmStyled>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>DEBUG ONLY</Card.Header>
            <Card.Description>
              {!kycId && <Input focus placeholder="kycid..." />}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" onClick={onClick('ok')}>
                Approve
              </Button>
              <Button basic color="black" onClick={onClick('no')}>
                Decline
              </Button>
              <Button basic color="red" onClick={onClick('error')}>
                Error
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </AutoConfirmStyled>
  );
};
export default AutoConfirm;
