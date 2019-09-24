import Butter from 'buttercms';
import _, { mapKeys, camelCase } from 'lodash';
import { Parser } from 'html-to-react';
import DOMPurify from 'dompurify';

const staticHtmlToReact = new Parser();
const apiKey = process.env.REACT_APP_BUTTER || '';
const butter = Butter(apiKey);

const WYSIWYGFields = ['description', 'businessPlan', 'operations', 'competitiveAnalysis'];

const toCamelCase = (v, k: string) => camelCase(k);

const sanitizeValue = fields => (v, k) => {
  if (fields.includes(k)) {
    console.log('Sanitizing...');
    return staticHtmlToReact.parse(DOMPurify.sanitize(v));
  }
  return v;
};

const requestPage = async (pageType: string, slug: string) => {
  const {
    data: {
      data: { fields: response }
    }
  } = await butter.page.retrieve(pageType, slug);

  const camelResponse: any = mapKeys(response, toCamelCase);
  if (camelResponse.companyDetails) {
    camelResponse.companyDetails = _(camelResponse.companyDetails)
      .mapKeys(toCamelCase)
      .mapValues(sanitizeValue(WYSIWYGFields))
      .value();
  }
  return camelResponse;
};

const findOne = async (collection: string, fields: any) => {
  const params = {
    page: 1,
    page_size: 1,
    ...fields
  };
  const {
    data: {
      data: { [collection]: arrResponse }
    }
  } = await butter.content.retrieve([collection], params);
  if (!arrResponse.length) {
    throw Error('404 Not found');
  }

  return _(arrResponse[0])
    .mapKeys(toCamelCase)
    .mapValues(sanitizeValue(WYSIWYGFields))
    .value();
};

export default butter;

export { requestPage, findOne, butter };