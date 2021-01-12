# vue3-blocks-tree

> A simple organization tree view based on Vue3.x

## Usage
```vue

<template>
  <div>
    <blocks-tree></blocks-tree>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({

  setup(props) {
    let treeData = {
      label:'root',
      expand:true,
      children:[
        {label:'child 1'},
        {label:'child 2'},
        {label:'subparent 1',expand:false,children:[
          {label:'subchild 1'},
          {label:'subchild 2',expand:false, children:[
            {label:'subchild 11'},
            {label:'subchild 22'},
          ]
          },
        ]
        },
      ]
    
    }
    return {
    
    }
  
  }

})

</script>

```
### NPM

```
# use npm
npm i vue3-blocks-tree

# use yarn
yarn add vue3-blocks-tree
```
### Import Plugins

``` js
import {createApp} from 'vue';
import VueBlocksTree from 'vue3-blocks-tree'

createApp(App).component('blocks-tree',VueBlocksTree)

// ...
```

### CDN

``` html
# css
<link href="https://unpkg.com/vue2-org-tree/dist/style.css">

# js
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue2-org-tree/dist/index.js"></script>
```


## API

#### props

  prop              | descripton                              | type                   | default
  ------------------|-----------------------------------------|:----------------------:|:---------------------------------------------------------:
  data              |                                         | `Object`               |
  props             |  configure props                        | `Object`               | `{label: 'label', children: 'children', expand: 'expand'}`
  labelWidth        |  node label width                       | `String` \| `Number`   | `auto`
  collapsable       |  children node is collapsable           | `Boolean`              | `true`
  renderContent     |  how to render node label               | `Function`             |     -
  labelClassName    |  node label class                       | `Function` \| `String` |     -



### events

  event name        | descripton                              | type
  ------------------|-----------------------------------------|:----------------------
  node-click        |  Click event                            | `Function`
  node-mouseover    |  onMouseOver event                      | `Function`
  node-mouseout     |  onMouseOut event                       | `Function`
  node-expand       |  click expand button event              | `Function`

### Slots

  slot name         | descripton                              | params
  ------------------|-----------------------------------------|:----------------------
  node              |  current node scoped slot               | data - node data, context - node context

#### node-expand
well be called when the collapse-btn clicked

- params `e` `Event`
- params `data` `Current node data`
- params `context` `Node context`

#### node-click
well be called when the node-label clicked

- params `e` `Event`
- params `data` `Current node data`
- params `context` `Node context`

#### node-mouseover
It is called when the mouse hovers over the label.

- params `e` `Event`
- params `data` `Current node data`
- params `context` `Node context`

#### node-mouseout
It is called when the mouse leaves the label.

- params `e` `Event`
- params `data` `Current node data`

## Example

- default

  ![default](./images/default.png)

- horizontal

  ![horizontal](./images/horizontal.png)

- use node slot

  ![horizontal](./images/horizontal.png)


## License
[MIT](http://opensource.org/licenses/MIT)
