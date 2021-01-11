import { h,defineComponent } from 'vue'

const EVENTS = {
  CLICK: 'onNodeClick',
  MOUSEOUT: 'onNodeMouseout',
  MOUSEOVER: 'onNodeMouseover'
}

function createListener (handler, data) {
  if (typeof handler === 'function') {
    return function (e) {
      
      if (e.target.className.indexOf('org-tree-node-btn') > -1) return

      handler.apply(null, [e, data])
    }
  }
}


const isLeaf = (data, prop) => {
  return !(Array.isArray(data[prop]) && data[prop].length > 0)
}


export function renderNode (h, data, context) {
  const { props } = context
  const cls = ['org-tree-node']
  const childNodes = []
  const children = data[props.props.children]

  if (isLeaf(data, props.props.children)) {
    cls.push('is-leaf')
  } else if (props.collapsable && !data[props.props.expand]) {
    cls.push('collapsed')
  }

  childNodes.push(renderLabel(h, data, context))

  if (!props.collapsable || data[props.props.expand]) {
    childNodes.push(renderChildren(h, children, context))
  }

  return h('div', {
    class: cls
  }, childNodes)
}


export function renderBtn (h, data, { props, attrs }) {

  const expandHandler = attrs['onExpand']

  let cls = ['org-tree-node-btn']

  if (data[props.props.expand]) {
    cls.push('expanded')
  }

  return h('span', {
    class: cls,
    onClick: e => {
      data[props.props.expand] = !data[props.props.expand];
      return expandHandler && expandHandler(e,data)
    }
  })
}

// label 
export function renderLabel (h, data, context) {
  const { props, attrs } = context
  const label = data[props.props.label]
  const renderContent = props.renderContent

  // event handlers
  const clickHandler = attrs[EVENTS.CLICK]
  const mouseOutHandler = attrs[EVENTS.MOUSEOUT]
  const mouseOverHandler = attrs[EVENTS.MOUSEOVER]

  const childNodes = []
  if (typeof renderContent === 'function') {
    let vnode = renderContent(h, data)

    vnode && childNodes.push(vnode)
  } else {
    childNodes.push(label)
  }

  if (props.collapsable && !isLeaf(data, props.props.children)) {
    childNodes.push(renderBtn(h, data, context))
  }

  const cls = ['org-tree-node-label-inner']
  let { labelWidth, labelClassName, selectedClassName, selectedKey } = props

  if (typeof labelWidth === 'number') {
    labelWidth += 'px'
  }

  if (typeof labelClassName === 'function') {
    labelClassName = labelClassName(data)
  }

  labelClassName && cls.push(labelClassName)

  // add selected class and key from props
  if (typeof selectedClassName === 'function') {
    selectedClassName = selectedClassName(data)
  }

  selectedClassName && selectedKey && data[selectedKey] && cls.push(selectedClassName)

  return h('div', {
    class: ['org-tree-node-label'],

  }, [h('div', {
    class: cls,
    style: [{ width: labelWidth }],
    onClick: createListener(clickHandler, data),
    onMouseout: createListener(mouseOutHandler, data),
    onMouseover: createListener(mouseOverHandler, data)

  }, childNodes)])
}

//  node 
export function renderChildren (h, list, context) {
  if (Array.isArray(list) && list.length) {
    const children = list.map(item => {
      return renderNode(h, item, context)
    })

    return h('div', {
      class: ['org-tree-node-children']
    }, children)
  }
  return ''
}

export function render (context) {
  
  const {props} = context

  return renderNode(h, props.data, context)
}

export default defineComponent({
  props:['data','props','collapsable','render-content','label-width','render-content','label-class-name','selected-class-name','selected-key'],
  setup(props, { slots, attrs, emit }) {

    return ()=>  renderNode(h, props.data, {props,attrs})
  },
  // functional:true
})

// export default render
