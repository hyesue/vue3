import type {CreateElement, VNode, VNodeData} from 'vue';

import * as is from './is';

/**
 * Clones a single VNode
 */
export function cloneVNode(vNode: VNode, createElement: CreateElement): VNode {
  const clonedChildren =
    vNode.children &&
    vNode.children.map((vNode) => cloneVNode(vNode, createElement));

  const cloned = createElement(vNode.tag, vNode.data, clonedChildren);

  cloned.text = vNode.text;
  cloned.isComment = vNode.isComment;
  cloned.componentOptions = vNode.componentOptions;
  // cloned.fnOptions = vNode.fnOptions;
  // cloned.fnContext = vNode.fnContext;
  cloned.elm = vNode.elm;
  cloned.context = vNode.context;
  cloned.ns = vNode.ns;
  cloned.isStatic = vNode.isStatic;
  cloned.key = vNode.key;
  cloned.data = vNode.data;

  return cloned;
}

/**
 * Clones an array of VNodes
 */
export function cloneVNodes(vNodes: VNode[], createElement: CreateElement) {
  const clonedVNodes = vNodes.map((vNode) => cloneVNode(vNode, createElement));
  return clonedVNodes;
}

/**
 * Clones VNode with merged data
 */
export function cloneVNodeElement(
  vNode: VNode,
  {props, attrs, ...rest}: VNodeData,
  h: CreateElement,
) {
  const cloned = cloneVNode(vNode, h);

  return h(
    cloned.componentOptions?.Ctor,
    {
      ...cloned.data,
      ...cloned.componentOptions?.listeners,
      props: {
        ...cloned.data?.props,
        ...cloned.componentOptions?.propsData,
        ...props,
      },
      attrs: {
        ...cloned.data?.attrs,
        ...attrs,
      },
      ...rest,
    },
    cloned.componentOptions?.children,
  );
}

/**
 * Clears out all nullish vNodes
 */
export function cleanChildren(vNodes?: VNode[]) {
  if (!vNodes) return [];
  return vNodes.filter((vNode) => !is.nullish(vNode.tag));
}
