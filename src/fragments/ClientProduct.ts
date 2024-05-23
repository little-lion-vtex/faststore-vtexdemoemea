import { gql } from '@faststore/core/api'

// This is the fallback fragment in case we the other one does not work - as advised by faststore
export const fragment = gql(`
fragment ClientProduct on Query {
    product(locator: $locator) {
        customData
    }
  }
`)