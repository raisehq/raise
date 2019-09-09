import Butter from 'buttercms';
import { mapKeys, camelCase } from 'lodash';
import { Parser } from 'html-to-react';
import DOMPurify from 'dompurify';

const staticHtmlToReact = new Parser();
const butter = Butter('47066b7559a0513f00c9c927334fe78b773525c9');

const requestPage = async (pageType: string, slug: string) => {
  const {
    data: {
      data: { fields: response }
    }
  } = await butter.page.retrieve(pageType, slug);

  const camelResponse = mapKeys(response, (v, key) => camelCase(key));
  if (camelResponse.description) {
    // Description is a WYSIWYG html field, so need to be sanitized to prevent XSS and JS scripts to be rendered
    camelResponse.description = staticHtmlToReact.parse(
      DOMPurify.sanitize(camelResponse.description)
    );
  }
  return camelResponse;
};

export default butter;

export { requestPage, butter };
