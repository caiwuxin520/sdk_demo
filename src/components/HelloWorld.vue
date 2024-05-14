<template>
  <div class="hello">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="newCancel">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="newCancel">取 消</el-button>
        <el-button type="primary" @click="newSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    cancel: {
      type: Function,
      default: null
    },
    submit: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  created() {
    this.dialogVisible = true;
  },
  methods: {
    newCancel() {
      this.cancel && this.cancel();
      this.dialogVisible = false;
    },
    newSubmit() {
      this.submit && this.submit();
      this.dialogVisible = false;
    }
  }
}
</script>

<style scoped>

</style>
