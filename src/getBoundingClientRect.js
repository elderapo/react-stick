// @flow
import invariant from 'invariant'

import { findDOMNode } from 'react-dom'

function getBoundingClientRect(instance: *): ClientRect {
  const element = findDOMNode(instance)

  invariant(
    element instanceof window.HTMLElement ||
      element instanceof window.SVGElement,
    'Cannot retrieve client rect of text or null elements'
  )

  return element.getBoundingClientRect()
}

export default getBoundingClientRect
