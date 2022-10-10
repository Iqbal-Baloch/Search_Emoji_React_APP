import EmojiRow from './EmojiRow'
const EmojiList = (props) => {
    return ( 
        <div>
            <main className="row justify-content-center mt-2 ">
            {
                props.emojies.map(item => (
                    <EmojiRow key={item.title} emoji={item} />
                ))
            }
        </main>

        </div>
             );
}
 
export default EmojiList;