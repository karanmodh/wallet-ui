interface repoProps {
    children: string;
    key: number;
    name: String;
    description?: String;
}

function RepoCard(props: repoProps) {
    return (
        <div style={rowStyles} className="row">
            <h2 style={{color: "blue"}}>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}

const rowStyles:Object = {
    textAlign: "left",
    color: "black",
    backgroundColor: "lightgray",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px"
}

export default RepoCard;