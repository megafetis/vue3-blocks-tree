<template>
  <div class="org-tree-container">
    <div class="org-tree" :class="{horizontal, collapsable}">
      <blocks-node
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
      </blocks-node>
    </div>
  </div>
</template>

<script lang="ts">
import BlocksNode from './blocks-node.vue';
import {defineComponent} from 'vue';
import {PropsType} from '../../../types/vue3-blocks-tree';
export default defineComponent({
  name: 'blocks-tree',
  components: {
    'blocks-node':BlocksNode
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    props: {
      type: Object,
      default: () => (<PropsType>{
        label: 'label',
        expand: 'expand',
        children: 'children',
        key: 'key'
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
