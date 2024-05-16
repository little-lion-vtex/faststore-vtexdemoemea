import { gql } from '@faststore/core/api'

export const fragment = gql(`
fragment ServeProduct on Query {
    product(locator: $locator) {
        customData
    }
  }
`)