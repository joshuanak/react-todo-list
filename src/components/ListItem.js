function ListItem({ key, task, onRemove }) {
  return (
    <div className={"list-item"}>
      <span>{task}</span>
      <button onClick={() => onRemove(task)} type="button">
        Done!
      </button>
    </div>
  );
}

export default ListItem;
