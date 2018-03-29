import ReactFiberReconciler from "react-reconciler";
import emptyObject from "fbjs/lib/emptyObject";
import invariant from "fbjs/lib/invariant";
import now from "performance-now";
import { createInstance, setInitialProperties, diffProperties, updateProperties } from "./ReactPixiFiberComponent";

/* PixiJS Renderer */

export function appendChild(parentInstance, child) {
  // TODO do we need to remove the child first if it's already added?
  parentInstance.removeChild(child);

  parentInstance.addChild(child);
  if (typeof child._customDidAttach === "function") {
    child._customDidAttach(child);
  }
}

export function removeChild(parentInstance, child) {
  if (typeof child._customWillDetach === "function") {
    child._customWillDetach(child);
  }

  parentInstance.removeChild(child);

  child.destroy();
}

export function insertBefore(parentInstance, child, beforeChild) {
  invariant(child !== beforeChild, "ReactPixiFiber cannot insert node before itself");

  const childExists = parentInstance.children.indexOf(child) !== -1;
  const index = parentInstance.getChildIndex(beforeChild);

  if (childExists) {
    parentInstance.setChildIndex(child, index);
  } else {
    parentInstance.addChildAt(child, index);
  }
}

export function commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
  updateProperties(type, instance, updatePayload, oldProps, newProps, internalInstanceHandle);
}

export function createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
  invariant(false, "ReactPixiFiber does not support text instances. Use `Text` component instead.");
}

export function finalizeInitialChildren(instance, type, props, rootContainerInstance) {
  setInitialProperties(type, instance, props, rootContainerInstance);
  return false;
}

export function getChildHostContext(parentHostContext, type) {
  return emptyObject;
}

export function getRootHostContext(rootContainerInstance) {
  return emptyObject;
}

export function getPublicInstance(inst) {
  return inst;
}

export function prepareForCommit() {
  // Noop
}

export function prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, hostContext) {
  return diffProperties(type, instance, oldProps, newProps, rootContainerInstance);
}

export function resetAfterCommit() {
  // Noop
}

export function resetTextContent(instance) {
  // Noop
}

export function shouldDeprioritizeSubtree(type, props) {
  const isAlphaVisible = typeof props.alpha === "undefined" || props.alpha > 0;
  const isRenderable = typeof props.renderable === "undefined" || props.renderable === true;
  const isVisible = typeof props.visible === "undefined" || props.visible === true;

  return !(isAlphaVisible && isRenderable && isVisible);
}

export function shouldSetTextContent(type, props) {
  return false;
}

export function commitTextUpdate(textInstance, oldText, newText) {
  // Noop
}

export function commitMount(instance, type, newProps) {
  // Noop
}

const ReactPixiFiber = ReactFiberReconciler({
  appendInitialChild: appendChild,
  createInstance: createInstance,
  createTextInstance: createTextInstance,
  finalizeInitialChildren: finalizeInitialChildren,
  getChildHostContext: getChildHostContext,
  getRootHostContext: getRootHostContext,
  getPublicInstance: getPublicInstance,
  now: now,
  prepareForCommit: prepareForCommit,
  prepareUpdate: prepareUpdate,
  resetAfterCommit: resetAfterCommit,
  resetTextContent: resetTextContent,
  shouldDeprioritizeSubtree: shouldDeprioritizeSubtree,
  shouldSetTextContent: shouldSetTextContent,
  useSyncScheduling: true,
  mutation: {
    appendChild: appendChild,
    appendChildToContainer: appendChild,
    commitMount: commitMount,
    commitTextUpdate: commitTextUpdate,
    commitUpdate: commitUpdate,
    insertBefore: insertBefore,
    insertInContainerBefore: insertBefore,
    removeChild: removeChild,
    removeChildFromContainer: removeChild,
  },
});

export default ReactPixiFiber;
