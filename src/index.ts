import BlocksTree from './components/blocks-tree/blocks-tree.vue';
import BlocksNode from './components/blocks-tree/blocks-node.vue';
import {App,Plugin} from 'vue';
const install = (app: App,settings?:{nodeName:string,treeName:string} ) => {
    app.component(settings && settings.treeName ? settings.treeName :'blocks-tree', BlocksTree);
    app.component(settings && settings.nodeName ? settings.nodeName :'blocks-node', BlocksNode);
  };

  BlocksTree.install = install;
import './styles/blocks-tree.less';
export {BlocksNode,BlocksTree}

export default BlocksTree as unknown as Plugin;
