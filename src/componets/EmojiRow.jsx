const EmojiLIsts = (props) => {
    return ( 
        <div className="col-lg-10 col-12">
            <h3 className="text-white bg-warning p-1 d-flex align-item-center bg-opacity-75"><span className="fs-1">{props.emoji.symbol} </span> {props.emoji.title}</h3>
        </div>
     );
}
 
export default EmojiLIsts;