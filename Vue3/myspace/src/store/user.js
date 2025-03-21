import $ from 'jquery';
import jwt_decode from 'jwt-decode';

const ModuleUser = {
    state: {
        id: "",
        username: "",
        photo: "",
        followerCount: 0,
        access: "",
        refresh: "",
        is_login: false,
    },
    getters: {},
    // 可以在 mutation 中修改state，但 mutation 不支持异步
    /* 
        调用 mutation 函数：context.commit("func", {arg});
        调用 action 函数：context.dispatch("func", {arg, 包括回调函数});
    */
    mutations: {
        updateUser(state, user) {
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.followerCount = user.followerCount;
            state.access = user.access;
            state.refresh = user.refresh;
            state.is_login = user.is_login;
        },
        updateAccess(state, access) {
            state.access = access;
        },
        logout(state) {
            state.id = "";
            state.username = "";
            state.photo = "";
            state.followerCount = 0;
            state.access = "";
            state.refresh = "";
            state.is_login = false;
        }
    },
    // actions 不能直接更新 state
    actions: {
        login(context, data) {
            // 通过jwt验证，先获取令牌
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/api/token/",
                type: "POST",
                data: {
                    username: data.username,
                    password: data.password,
                },
                success(resp) {
                    const { access, refresh } = resp;
                    const access_obj = jwt_decode(access);

                    setInterval(() => {
                        $.ajax({
                            url: "https://app165.acapp.acwing.com.cn/api/token/refresh/",
                            type: "POST",
                            data: {
                                refresh: refresh,
                            },
                            success(resp) {
                                context.commit("updateAccess", resp.access);
                            }
                        });
                    }, 4.5 * 60 * 1000);

                    // 登录成功，通过API获得用户信息，
                    console.log(access_obj, refresh);
                    $.ajax({
                        url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
                        type: "get",
                        data: {
                            user_id: access_obj.user_id,
                        },
                        // jwt 验证
                        headers: {
                            'Authorization': "Bearer " + access,
                        },
                        success(resp) {
                            context.commit("updateUser", {
                                ...resp,
                                access: access,
                                refresh: refresh,
                                is_login: true,
                            })
                            console.log(resp);
                            data.success();
                        }
                    });
                },
                error() {
                    data.error();
                }
            })
        },
    },
    modules: {}
}

export default ModuleUser;