
function ChildComponent(props){
    console.log("Child ",props.text);
    return(
        <li>
            {props.text}
            <button className="btn btn-primary"
                    onClick={()=>props.deleteAction()}>
                Delete
            </button>
        </li>
    );
}
function ListDemo(props){
    let {items} = props;
    function deleteComment(id){
        console.log("Comment deleted ",id);
    }
    let components = items.map(item=>
        <ChildComponent
            key={item.id}
            deleteAction = {deleteComment.bind(this,item.id)}
            text={item.text}/>
        )

    return (<div>
        <ol>
            {components}
        </ol>
    </div>)
}
export default ListDemo;