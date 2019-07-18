import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        add: [],
        dis:[],
        bian:[],
        bao:{}
    },
    mutations: {
        setlist(state, data) {
            state.list = data
        },
        //编辑
        setbian(state,data){
            state.bian = data
        },

        //保存
        setbao(state,data){
            state.bao = data
        },

        inpFn(state,key){
            if(!key==''){
                let text = state.list.filter((item)=>{
                    return item.name.includes(key)
                })
                state.list = text
            }
        }
    },
    actions: {
        getlist({ commit }) {
            axios.get('/list').then(({ data }) => {
                commit('setlist', data)
                // console.log(data)
            })
        },
        //增加
        getadd({ state }, obj) {
            axios.post('/add', { obj: obj }).then(({ data }) => {
                state.add = data
                // console.log(state.add,'state.add1111111')
            })
        },
        //删除
        getdis({state},id){
            axios.get('/dis',{params:{id}}).then(({data})=>{
                state.dis = data
            })
        },
        // 编辑
        getbian({commit},ind){
            axios.get('/bian',{params:{ind}}).then(({data})=>{
                commit('setbian',data)
                // console.log(data)
            })
        },
        //保存
        getbao({commit},obj){
            axios.post('/bao',{obj:obj},({data})=>{
                console.log(obj)
                commit('setbao',data)
            })
        }
    },

})