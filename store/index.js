export const state = () => ({
  navbar: false,
});

export const mutations = {
  setNavbar: (state, payload) => {
    state.navbar = !state.navbar;
  },
};
