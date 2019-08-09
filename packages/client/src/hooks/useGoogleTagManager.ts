import TagManager from 'react-gtm-module';

export function useGoogleTagManager(
  userId,
  project,
  category,
  pagePath,
  pageTitle,
  dataLayerName,
  event
) {
  const tagManagerArgs = {
    dataLayer: {
      event: event,
      userId: userId,
      userProject: project,
      pagePath: pagePath,
      pageTitle: pageTitle,
      category: category,
      action: event,
      label: pageTitle
    },
    dataLayerName: dataLayerName
  };

  return TagManager.dataLayer(tagManagerArgs);
}

export default useGoogleTagManager;
