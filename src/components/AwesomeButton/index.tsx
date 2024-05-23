import { Button } from '@faststore/ui'
// Add slide layover

export function AwesomeButton() {
    return (
        <div>
            <Button variant="primary" onClick={() => alert("Awesome Button")}>
            Click Me!
            </Button>
        </div>
    );
}