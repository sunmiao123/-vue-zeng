<template>
  <div class="home">
    <el-container>
      <el-header>
        <input type="text" v-model="key" @keyup="inpFn(key)">
      </el-header>
      <el-main>
        <!-- {{list}} -->
        <mtitem v-for="(item,ind) in list" :key="ind" :option="item" :ind="ind"></mtitem>
      </el-main>
      <button @click="addFn">增加</button>
      <el-footer>
        <router-link to="/my">我的</router-link>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import mtitem from "./item";
export default {
  props: {},
  components: {
    mtitem
  },
  data() {
    return {
      key: ""
    };
  },
  computed: {
    ...mapState(["list"])
  },
  methods: {
    ...mapActions(["getlist"]),
    ...mapMutations(['inpFn']),
    addFn() {
      this.$router.push("/add");
    },
  },
  created() {
    this.getlist();
    // console.log(this.getlist())
    // console.log(this.list)
  },
  mounted() {}
};
</script>
<style scoped lang="">
.home {
  width: 100%;
  height: 100%;
  display: flex;
}
.el-main {
  flex: 1;
}
</style>