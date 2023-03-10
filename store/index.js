export const state = () => ({
  navbar: false,
  ssid: null,
  air_quality_list: null,
  bus_stops: null,
  hospitals: null,
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
  setBus_stops: (state, payload) => {
    state.bus_stops = payload;
  },
  setPoi_code1_icon: (state, payload) => {
    state.hospitals = payload;
  },
};
