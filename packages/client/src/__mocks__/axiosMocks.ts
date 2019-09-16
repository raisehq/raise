
import MockAdapter from 'axios-mock-adapter';

const MockAxios = (axios: any) => {

    // This sets the mock adapter on the default instance
    // @ts-ignore
    const AxiosMock = new MockAdapter(axios);
    AxiosMock.onPost('https://int.herodev.es/api/jwt/verify').reply(200, { "mock": true, "success": true });
    AxiosMock.onGet('https://int.herodev.es/api/cryptoaddress/user/user:ca821825-16ae-4a7f-94b7-de754c41127f').reply(200, { "mock": true, "success": true, "data": [{ "id": "cryptoaddress:eaabbd22-7c22-4be6-9a4d-09dd660ee50c", "herouser_id": "user:ca821825-16ae-4a7f-94b7-de754c41127f", "address": "0x26A5373dc417c39b6542dfBb5064FaaA6C870281", "cryptotype_id": 2, "site": null, "created_on": "2019-09-03T15:20:44.038Z", "deleted": 0 }] });
    AxiosMock.onGet('https://int.herodev.es/api/users/user:ca821825-16ae-4a7f-94b7-de754c41127f').reply(200, { "mock": true, "success": true, "data": { "id": "user:ca821825-16ae-4a7f-94b7-de754c41127f", "username": "Mr.Rob", "email": "daniel+borrower@herotoken.io", "referral_code": "gKH2dJ", "referrer_code": null, "firstname": null, "lastname": null, "status": 2, "accounttype_id": 1, "delete": 0, "phone": null, "birthday": null } });

}

// @ts-ignore
export default MockAxios;