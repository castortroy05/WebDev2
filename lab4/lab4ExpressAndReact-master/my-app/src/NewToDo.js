function NewToDo(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const todo = document.getElementById("todo");
        props.handleSubmit(todo.value);
        todo.value="";
       } 
    return (
        <form method='post' onSubmit={handleSubmit}>
        <p>New to-do item</p>
         <label>Item</label>
         <input type="text"name="todo" id="todo"/>
        <input type="submit" value="Submit" />
        </form>
        );
    }        
export default NewToDo;