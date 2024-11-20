import "./card.css"

interface CardProps {
    children?: any;
    className?: String;
}

export default function Card(props: CardProps){
    return <div className={"served-card " + (props.className ? props.className : "")}>
        {props.children}
    </div>
} 