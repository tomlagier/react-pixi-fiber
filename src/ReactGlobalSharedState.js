/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

const ReactInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

export const ReactDebugCurrentFrame = __DEV__ ? ReactInternals.ReactDebugCurrentFrame : null;

export function getStackAddendum() {
  const stack = ReactDebugCurrentFrame.getStackAddendum();
  return stack != null ? stack : "";
}
