import { Step } from '@raisehq/onboarding';

export default (dispatch: any, state: any) => {
  const showOnboarding = troggle => {
    console.log('TROGGLE!!! -----------> ', troggle);
    dispatch({
      type: 'ONBOARDING_SHOW',
      data: {
        show: true,
        troggle: troggle === 'login' ? Step.SignIn : Step.Start
      }
    });
  };
  const hiddeOnboarding = () =>
    dispatch({
      type: 'ONBOARDING_HIDDEN',
      data: {
        ...{ show: false }
      }
    });
  return {
    showOnboarding,
    hiddeOnboarding
  };
};
