import { getPropertyInfo, shouldIgnoreAttribute, shouldRemoveAttribute } from "./PixiProperty";
import { DEFAULT_PROPS } from "./props";
import { setPixiValue } from "./utils";

/**
 * Sets the value for a property on a PIXI.DisplayObject instance.
 *
 * @param {string} type
 * @param {PIXI.DisplayObject} instance
 * @param {string} propName
 * @param {*} value
 */
export function setValueForProperty(type, instance, propName, value) {
  const propertyInfo = getPropertyInfo(propName);

  if (shouldIgnoreAttribute(type, propName, propertyInfo)) {
    return;
  }
  if (shouldRemoveAttribute(type, propName, value, propertyInfo)) {
    // Try to reset to property to default value (if it is defined)
    const defaultValue = DEFAULT_PROPS[propName];
    if (typeof defaultValue !== "undefined") {
      value = defaultValue;
    } else {
      value = null;
    }
  }

  setPixiValue(instance, propName, value);
}
