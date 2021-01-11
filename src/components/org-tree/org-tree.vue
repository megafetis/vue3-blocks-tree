<template>
  <div class="org-tree-container">
    <div class="org-tree" :class="{horizontal, collapsable}">
      <org-tree-node
        :data="data"
        :props="props"
        :horizontal="horizontal"
        :label-width="labelWidth"
        :collapsable="collapsable"
        :render-content="renderContent"
        :label-class-name="labelClassName"
        @node-expand="(e, data,nodeContext) => $emit('node-expand', e, data,nodeContext)"
        @node-focus="(e, data,nodeContext) => $emit('node-focus', e, data,nodeContext)"
        @node-click="(e, data,nodeContext) => $emit('node-click', e, data,nodeContext)"
        @node-mouseover="(e, data,nodeContext) => $emit('node-mouseover', e, data,nodeContext)"
        @node-mouseout="(e, data,nodeContext) => $emit('node-mouseout', e, data,nodeContext)"
      >
      <template #node="{data,context}">
        <slot name="node" :data="data" :context="context"></slot>
      </template>
      </org-tree-node>
    </div>
  </div>
</template>

<script lang="ts">
import OrgTreeNode from './org-node.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Vue2OrgTree',
  components: {
    OrgTreeNode
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    props: {
      type: Object,
      default: () => ({
        label: 'label',
        expand: 'expand',
        children: 'children'
      })
    },
    horizontal: Boolean,
    collapsable: Boolean,
    renderContent: Function,
    labelWidth: [String, Number],
    labelClassName: [Function, String],
  }
})
</script>

<style lang="less">
@import '../../styles/org-tree';
</style>
