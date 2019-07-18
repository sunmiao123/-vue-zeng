<template>
  <div>
    <h1>增加页面</h1>
    <div class="block">
      <el-date-picker v-model="obj.day" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
    </div>
    <p>
      名字
      <input type="text" v-model="obj.name">
    </p>
    <p>
      地址
      <input type="text" v-model="obj.address">
    </p>
    <button @click="addFn(obj)">确定</button>
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
        address: "",
        day: "",
        id: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  },
  computed: {},
  methods: {
    // ...mapActions(["getadd"]),
    addFn() {
      this.$store.dispatch("getadd", this.obj);
      this.$router.back();
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>