<template>
  <div>
    <h1>编辑页面</h1>
    {{bian}}
    <p>
      姓名
      <input type="text" v-model="obj.name">
    </p>
    <p>
      日期
      <input type="text" v-model="obj.day">
    </p>
    <p>
      地址
      <input type="text" v-model="obj.address">
    </p>
    <button @click="baoFn(obj)">保存</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      obj: {
        name: "",
        day: "",
        address: ""
      },
      ind:0
    };
  },
  created() {
    this.ind = this.$route.params.ind;
    this.getbian(this.ind);
  },
  computed: {
    ...mapState(["bian"])
  },
  methods: {
    ...mapActions(["getbian"]),
    baoFn(){
        this.$store.dispatch('getbao',{obj:this.obj,ind:this.ind});
        this.$router.go(-1)
    }
  },

  mounted() {},

  watch: {
    bian: {
      handler(n, o) {
        this.obj = n;
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped lang="">
</style>