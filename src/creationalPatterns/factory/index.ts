type ButtonProps = {
    label: string;
    onClick: () => void;
}

export enum ButtonTypes {
    Secondary = 'Secondary',
    Primary = 'Primary'
}

abstract class AbstractButton {
    private label: string;
    onClick: () => void;

    protected constructor({ label, onClick }: ButtonProps) {
        this.label = label;
        this.onClick = onClick;
    }

    abstract render(): void;
    abstract click(): void;
}

export class PrimaryButton extends AbstractButton {
    constructor(props: ButtonProps) {
        super(props);
    }

    click() {
        console.log(`click ${this.constructor.name}`)
        this.onClick();
    }
    render() {
        console.log(`render ${this.constructor.name}`)
    }
}

export class SecondaryButton extends AbstractButton {
    constructor(props: ButtonProps) {
        super(props);
    }

    click() {
        console.log(`click ${this.constructor.name}`)
        this.onClick();
    }
    render() {
        console.log(`render ${this.constructor.name}`)
    }
}

const buttonTypesRegistry = {
    [ButtonTypes.Secondary]: SecondaryButton,
    [ButtonTypes.Primary]: PrimaryButton,
}

export class ButtonsFactory {
    constructor() {}

    createButton(type: ButtonTypes, params: ButtonProps): AbstractButton {
        return new buttonTypesRegistry[type](params);
    }
}

export const buttonFactory = new ButtonsFactory();