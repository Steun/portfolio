import { ActionItem } from "@/assets/scripts/actions";

export default {
  name: "project-info",
  props: ["currentProject"],
  data() {
    return {
      projectInfo: undefined
    };
  },
  methods: {
    toggleProjectInfo() {
      if (this.$store.state.projectInfoExpanded) {
        this.$store.dispatch("toggleProjectInfoExpanded", false);
      } else {
        this.$store.dispatch("toggleProjectInfoExpanded", true);
      }
    }
  },
  computed: {
    expanded() {
      return this.$store.state.projectInfoExpanded;
    }
  },
  mounted() {
    this.$nextTick().then(() => {
      this.projectInfo = new ActionItem("projectInfo");

      this.$watch("expanded", newValue => {
        if (newValue) {
          this.projectInfo.activate();
          this.$parent.$parent.pauseTicker();
        } else {
          this.projectInfo.deactivate();
          this.$parent.$parent.ticker();
        }
      });
    });
  }
};
