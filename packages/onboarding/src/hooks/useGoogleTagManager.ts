import TagManager from 'react-gtm-module';

export enum TMEvents {
  Submit = 'submit',
  Click = 'click',
  PageView = 'pageview'
}

const GTMID = process.env.REACT_APP_GTM_ID;

function useGoogleTagManager(category?) {
  const sendEvent = (event, label, value?) =>
    TagManager.dataLayer({
      gtmId: GTMID,
      dataLayer: {
        event,
        category,
        action: event,
        value: value || label,
        label
      }
    });
  const sendEventCategory = (newCategory, event, label, value?) =>
    TagManager.dataLayer({
      gtmId: GTMID,
      dataLayer: {
        event,
        category: newCategory,
        value: value || label,
        action: event,
        label
      }
    });
  const pageView = (path, title) =>
    TagManager.initialize({
      gtmId: GTMID,
      dataLayer: {
        event: TMEvents.PageView,
        pagePath: path,
        pageTitle: title
      }
    });

  // Esta funcion sirve para todo.

  return { sendEvent, pageView, sendEventCategory };
}

export default useGoogleTagManager;
