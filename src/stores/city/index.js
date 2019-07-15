const state = {
    // 没存储之前	
    //nm:'北京',
    //id:1

    // 存储之后获取
    nm: window.localStorage.getItem('nowNm') || '北京',
    id: window.localStorage.getItem('nowId') || 1
};
const actions = {

};
const mutations = {
    //方法名字尽量大写
    CITY_INFO(state, payload) {
        state.nm = payload.nm;
        state.id = payload.id;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}