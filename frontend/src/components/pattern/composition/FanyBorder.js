function FancyBorder(props)
{
    return(<div className={'fancy-'+props.color}>
        {props.children}
    </div>);
}
export default FancyBorder;