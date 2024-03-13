function ListItem({ item, handleUser, userId }) {
    return (
        <li className="list-item">
            <button className={`list-item-btn${item.id === userId ? " list-item-btn--active" : ""}`} type="button" onClick={() => {handleUser(item.id)}}>{item.name}</button>
        </li>
    );
}

export default ListItem;