function ClearToDo(props) {
    const handleClear = (event) => {
        event.preventDefault();
        props.handleClear();
       } 
    return (
        <p>
        <button method='post' onClick={handleClear} >Clear all items</ button>
        </p>
        );
    }        
export default ClearToDo;   