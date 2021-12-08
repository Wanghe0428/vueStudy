// 使用一个相关的整个模块module导出，供index.js在module中使用
export default {
    // 命名空间，也就是说你可以在其他模块引入此模块后，可以引用我的state状态里的数据
    namespaced: true,
    state: {
        name: "wanghe",
        password: "123232",
        token: "waafFfawfafwawf"
    },
    mutations: {
        setName(state, name) {
            state.name = name
        }
    }
}
