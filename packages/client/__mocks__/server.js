// Library : https://github.com/jaywcjlove/mocker-api
// IDEA: use swagger definition to create a mock api and fake responses
const proxy = {
  'POST /jwt/authenticate': (req, res) => {
    const { password, email } = req.body;

    if (password === '1234567' && email === 'admin@admin.com') {
      return res.json({
        success: true,
        message: 'HeroUser Successfully created',
        data: {
          JwtToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvckBoZXJvdG9rZW4uaW8iLCJpYXQiOjE1NDcxMjAzNDYsImV4cCI6MTU0NzEyMzk0Nn0.bNQxJcU3jWpoCsBZKSwOVc38EhAsWNUZSTzamhsONRA',
          user: {
            id: 'user:fe34cd10-35e7-4f1f-8131-4570a18bafcd',
            email: 'bor@herotoken.io',
            firstname: 'Bor',
            lastname: 'Ztips'
          }
        }
      });
    } else {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized',
        data: null
      });
    }
  },
  'POST /user/register': (req, res) => {
    const data = {
      success: true,
      message: 'Token generated Successfully',
      data: {
        JwtToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvckBoZXJvdG9rZW4uaW8iLCJpYXQiOjE1NDcxMjAzNDYsImV4cCI6MTU0NzEyMzk0Nn0.bNQxJcU3jWpoCsBZKSwOVc38EhAsWNUZSTzamhsONRA',
        user: {
          id: 'user:fe34cd10-35e7-4f1f-8131-4570a18bafcd',
          email: 'bor@herotoken.io',
          firstname: 'Bor',
          lastname: 'Ztips'
        }
      }
    };
    return res.json(data);
  },
  'POST /address/addinfo': (req, res) => {
    const data = {
      success: true,
      message: 'Address Successfully created',
      data: {
        id: 'address:9ff62496-77db-401b-b14a-a852883ab4cb',
        herouserId: 'user:fe34cd10-35e7-4f1f-8131-4570a18bafcd',
        countryId: 'ata',
        dataJson: '{"passport": "BA123456", "Country": "Rancia"}',
        addressTypeId: '1',
        createdOn: '2019-01-10T13:56:17.161Z',
        deleted: 0
      }
    };
    return res.json(data);
  },
  'POST /kyc/addinfo': (req, res) => {
    const data = {
      success: true,
      message: 'Kyc Request Successfully created',
      data: {
        requestId: 'kycrequest:043486ed-6bd0-42c5-ad5a-84366098240a',
        kycDetailJson: '{"passport": "BA123456", "Country": "Islandia"}',
        createdOn: '2019-01-10T13:58:15.019Z',
        kycStatusId: 1
      }
    };
    return res.json(data);
  },
  'POST /file/b64': (req, res) => {
    const data = Object.assign({
      success: true,
      message: 'File Successfully stored',
      data: {
        id: 'file:dfe101f9-0022-4d31-bdc3-906699b0d939',
        filename: 'user_profile.png',
        typeId: '1',
        size: '5',
        herouserId: 'user:fe34cd10-35e7-4f1f-8131-4570a18bafcd',
        createdOn: '2019-01-18T11:03:31.530Z',
        deleted: 0
      }
    });
    return res.json(data);
  },
  'GET /kyc/check/:user': (req, res) => {
    const data = Object.assign({
      created: new Date(),
      status: 'ok',
      status: 'VALIDATING'
    });
    return res.json(data);
  },
  'GET /users/email/token/validate/:id': (req, res) => {
    const data = Object.assign({
      status: 'ok',
      data: null
    });
    return res.json(data);
  },
  'GET /users/email/token/send/:id': (req, res) => {
    const data = Object.assign({
      status: 'ok',
      data: null
    });
    return res.json(data);
  }
};
module.exports = proxy;
