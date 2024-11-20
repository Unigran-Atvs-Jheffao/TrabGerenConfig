import "./appbar.css"

interface AppBarProps {
    hasCart?: boolean;
}

export default function AppBar(props: AppBarProps) {
    return <div className="served-appbar">
        <a href="/" className="served-appbar-link">
            <div className="served-appbar-logo">
                <img src="logo.svg" className="served-appbar-icon"/>
                <span className="served-title-text">Served!</span>
            </div>
        </a>
        {
            props.hasCart ? <a href="/cart" className="served-cart">
                <img className="served-cart-icon" src="cart.svg"></img>
            </a> : ""}
    </div>
}