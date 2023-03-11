

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
                                   {badgeText && <div className="card--badge">{badgeText}</div>}


            <img src= {props.item.coverImg} className="card--image"/>
            <div className="card--stats">
                <img src="./images/star.png"className="card--star" />
                <span>({props.item.stats.rating})</span>
                <span className="gray">{props.item.stats.reviewcount} •</span>
                <span className="gray">{props.item.location}</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><strong> From ${props.item.price}</strong>/ person</p>
        </div>
    )
}