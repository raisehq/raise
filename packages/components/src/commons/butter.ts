import camelCase from 'lodash/camelCase';
import { Parser } from 'html-to-react';
import DOMPurify from 'dompurify';
import { chain } from './chain';


const staticHtmlToReact = new Parser();
const WYSIWYGFields = ['description', 'businessPlan', 'operations', 'competitiveAnalysis'];

const toCamelCase = (_v: any, k: string) => camelCase(k);

const sanitizeValue = (fields: any[]) => (v: string, k: string) => {
  if (fields.includes(k)) {
    return staticHtmlToReact.parse(DOMPurify.sanitize(v));
  }
  return v;
};


export const findOne = async (butter: any, collection: string, fields: any) => {
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
    throw Error('[Butter][findOne] 404 Not found');
  }

  return chain(arrResponse[0])
    .mapKeys(toCamelCase)
    .mapValues(sanitizeValue(WYSIWYGFields))
    .value();
};
