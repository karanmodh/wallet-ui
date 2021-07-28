interface headerProps {
    text: string;
}

function Header(props : headerProps) {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    );
}

export default Header