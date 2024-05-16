import { SectionOverride } from '@faststore/core'
import { CustomBuyButton } from '../CustomBuyButtom'

const SECTION = 'ProductDetails' as const

const override: SectionOverride = {
    section: SECTION,
    components: {
        BuyButton: { Component: CustomBuyButton }
    },
}

export { override }