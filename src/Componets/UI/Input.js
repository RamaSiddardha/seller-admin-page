const Input = (props) => {
    return <>
        <label htmlFor={props.id}>{props.name}</label>
        <input type={props.type} value={props.value} id={props.id} onChange={props.onChange}></input>
    </>
}

export default Input