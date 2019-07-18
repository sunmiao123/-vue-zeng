<template>
  <div>
    <ul>
      <li>
        <span>{{option.name}}</span>
        <span></span>
        <span>{{option.address}}</span>
        <span>{{option.day}}</span>
        <span>
          <el-button type="primary" @click="bianFn(ind)">编辑</el-button>
        </span>
        <span>
          <el-button type="primary">查看</el-button>
          
        </span>
        <span>
          <el-button type="primary" @click="disFn(ind)">删除</el-button>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  props: ["option", "ind"],
  data() {
    return {};
  },

  computed: {},
  methods: {
      
    disFn(id) {
       this.$store.dispatch('getdis',id)
    },
    bianFn(ind){
        // console.log(ind)
        // console.log(this.option)
        // this.$store.dispatch('getbian',this.option)
        this.$router.push('/bian/'+ind)
    }
  },
  created() {
    

  },
  mounted() {}
};
</script>


<style scoped lang="scss">
span {
  display: inline-block;
}
</style>