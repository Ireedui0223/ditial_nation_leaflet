export const state = () => ({
  navbar: false,
  ssid: null,
  air_quality_list: null,
});

export const mutations = {
  setNavbar: (state, payload) => {
    state.navbar = !state.navbar;
  },
  setAirQualityList: (state, payload) => {
    state.air_quality_list = payload;
  },
  setSSID: (state, payload) => {
    state.ssid = payload;
  },
};
