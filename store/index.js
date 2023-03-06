export const state = () => ({
  navbar: false,
  pageData: null,
  ssid: null,
});

export const mutations = {
  setNavbar: (state, payload) => {
    state.navbar = !state.navbar;
  },
  setPageData: (state, payload) => {
    state.pageData = payload;
  },
  setSSID: (state, payload) => {
    state.ssid = payload;
  },
};
