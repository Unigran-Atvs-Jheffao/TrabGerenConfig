import "./button.css"

interface ButtonProps {
    onClick: () => void;
    children: any;
}

export default function Button(props: ButtonProps) {
    return <button className="served-button" onClick={props.onClick}>
        {props.children}
    </button>
}