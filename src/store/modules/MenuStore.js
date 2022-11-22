const menuStore = {
    namespaced: true,
    state: {
        adminMenuList: [
            {
                name: '홈',
                path: '/admin',
                active: false
            },
            {
                name: '회원관리',
                path: '/admin',
                active: false
            },
            {
                name: '매장관리',
                path: '/admin',
                active: false
            },
            {
                name: '상품관리',
                path: '/admin',
                active: false
            },
            {
                name: '예약관리',
                path: '/admin',
                active: false
            },
        ]
    },
    getters: {
        getAdminMenuList(state) {
            return state.adminMenuList;
        },
        getActiveAdminMenuList(state) {
            const res = state.adminMenuList.filter(function(e) {
                            return e.active
                        });
            console.log('getActiveAdminMenuList --> ', res);
            return res;
        }
    },
    mutations: {
        SET_ACTIVE_MENU(state, menu) {
            state.adminMenuList.forEach(e => {
                if(e.name == menu.name) {
                    e.active = true;
                }
            });
        },
        SET_INACTIVE_MENU(state, menu) {
            state.adminMenuList.forEach(e => {
                if(e.name == menu.name) {
                    e.active = false;
                }
            });
        }
    },
    actions: {
        activeMenu({ commit }, menu) {
            commit('SET_ACTIVE_MENU', menu);
        },
        inactiveMenu({ commit }, menu) {
            commit('SET_INACTIVE_MENU', menu);
        }
    }
};

export default menuStore;