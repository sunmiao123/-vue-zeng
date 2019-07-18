<template>
    <div>
        <h1>登录</h1>
        <input type="text" v-model="user">
        <button @click="butFn">登录</button>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            user:''
        }
    },
    computed:{

    },
    methods:{
        butFn(){
            let user = this.user;
            localStorage.user = user
            this.$router.back()
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>