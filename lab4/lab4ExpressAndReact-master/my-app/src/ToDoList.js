function ToDoList(props) {
    const { data } = props.data;
    const result = data.map((entry) => {
     return <li key={entry.todo}>{entry.todo}</li>
    });
    return (
        <div>   
            <div><p>My to-do list</p><ul>{result}</ul></div>
        </div>);
        }
export default ToDoList;
