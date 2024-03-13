import ListItem from "./ListItem";

function List({ items, handleUser, userId }) {
    return (
        <ul className="list">
            {items.map(item => (
                <ListItem key={item.id} item={item} handleUser={handleUser} userId={userId} />
            ))}
        </ul>
    );
}

export default List;
