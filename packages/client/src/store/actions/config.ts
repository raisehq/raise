export default (dispatch: any) => ({
  showMenu: visibility => dispatch({ type: 'SHOW_MENU', data: visibility }),
  updateNetwork: (network, networkId) =>
    dispatch({ type: 'UPDATE_NETWORK', data: { network, networkId } })
});
