import Butter from 'buttercms';
import _, { mapKeys, camelCase } from 'lodash';
import staticHtmlToReact from 'htmr';
import DOMPurify from 'dompurify';

import MockButterCMS from '../__mocks__/buttercmsMocks';

const apiKey = process.env.REACT_APP_BUTTER || '';

// @ts-ignore
const butter = window.Cypress ? MockButterCMS() : Butter(apiKey, false, 10000);

const WYSIWYGFields = ['description', 'businessPlan', 'operations', 'competitiveAnalysis'];

const toCamelCase = (v, k: string) => camelCase(k);

const sanitizeValue = (fields) => (v, k) => {
  if (fields.includes(k)) {
    return staticHtmlToReact(DOMPurify.sanitize(v));
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
  if (camelResponse?.members) {
    camelResponse.members = camelResponse.members.map((member) => mapKeys(member, toCamelCase));
  }
  if (camelResponse?.companyDetails) {
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
    throw Error('[Butter][findOne] 404 Not found');
  }

  return _(arrResponse[0]).mapKeys(toCamelCase).mapValues(sanitizeValue(WYSIWYGFields)).value();
};
const findOneCollection = async (collection: string, fields: any) => {
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

  return arrResponse;
};

const getCollection = async (collection: string, fields: any) => {
  const params = {
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

  return arrResponse;
};

const getGetStarted = async () => {
  const {
    data: {
      data: { ['get_started']: arrResponse } // eslint-disable-line
    }
  } = await butter.content.retrieve(['get_started']);
  if (!arrResponse.length) {
    throw Error('[Butter][getGetStarted]404 Not found');
  }

  return arrResponse;
};

export default butter;

export { requestPage, getGetStarted, findOne, butter, findOneCollection, getCollection };
