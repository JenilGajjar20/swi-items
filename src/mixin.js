export default {
  data() {
    return {
      itemName: "",
    };
  },
  created() {
    this.capitalize();
  },
  methods: {
    capitalize() {
      let name = this.$route.params.itemname || this.$route.name;
      this.itemName = name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
