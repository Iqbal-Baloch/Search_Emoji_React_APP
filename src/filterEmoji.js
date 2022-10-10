import emojiList from './emojiList.json'
export default function filterEmojies(prefix, min){
    return emojiList.filter(emoji => {
        if (emoji.title.toLocaleLowerCase().includes(prefix.toLocaleLowerCase())) return true ;
        if (emoji.keywords.toLocaleLowerCase().includes(prefix.toLocaleLowerCase())) return true ;
        return false
    }).slice(0, min)
}