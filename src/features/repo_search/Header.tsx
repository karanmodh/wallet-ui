import navilogo from "../../assets/navilogo.png"

interface headerProps {
    text: string;
}

function Header(props : headerProps) {
    return (
        <div>
            <img src={navilogo} alt="Navi Logo" style={{width:"150px", marginTop:"20px"}}/>
            <h1 style={{color:"#4B4968"}}>{props.text}</h1>
        </div>
    );
}

export default Header