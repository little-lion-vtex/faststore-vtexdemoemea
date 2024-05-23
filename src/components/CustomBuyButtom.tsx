import { Button as UIButton } from '@faststore/ui'
import { usePDP } from '@faststore/core' // Hook

export function CustomBuyButton() {
    const context = usePDP()

    return (
        <UIButton
            variant="primary"
            onClick={()=> {
                alert(`
                    Product Name: ${context.data.product.isVariantOf.name}
                    \nSKU Name: ${context.data.product.name}
                    \nSKU ID: ${context.data.product.id}
                    \nSKU ID: ${context.data.product.customData}
                `)
            }}
        >
            Click me!
        </UIButton>
    )
}