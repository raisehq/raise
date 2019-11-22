import TagManager from 'react-gtm-module';

export enum TMEvents {
  Submit = 'submit',
  Click = 'click',
  PageView = 'pageview'
}

const GTMID = process.env.REACT_APP_GTM_ID;

function useGoogleTagManager(category?) {
  const sendEvent = (event, label, value?) =>
    TagManager.initialize({
      gtmId: GTMID,
      dataLayer: {
        event,
        category,
        value: value || label,
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

  return { sendEvent, pageView };
}

export default useGoogleTagManager;
