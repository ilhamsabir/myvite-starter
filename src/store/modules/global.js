const SET_ISADMIN = 'SET_ISADMIN'

const global = {
	state: () => ({
		isAdmin: false,
	}),
	mutations: {
		[SET_ISADMIN](state, value) {
			state.isAdmin = value;
		},
	},
	actions: {
		setIsAdmin({ commit }, value) {
			commit(SET_ISADMIN, value)
		}
	},
	getters: {
		isAdmin: (state) => state.isAdmin,
	}
}

export default global
