function Details({ info }) {
    const { details } = info;

    return (
        <div className="user">
            <img src={info.avatar} alt={info.name} />
            <h2 className="user-name">{info.name}</h2>
            <div className="user-details">City: {details.city}</div>
            <div className="user-details">Company: {details.company}</div>
            <div className="user-details">Position: {details.position}</div>
        </div>
    );
}

export default Details;
