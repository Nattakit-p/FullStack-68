function censorWord(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const censoredText = sentence.replace(regex, '***');
    return censoredText;
}

const originalPost = "JavaScript is Fun, but someting javascript";
const cleanPost = censorWord(originalPost, "javascript");

console.log(cleanPost); // Output: "*** is Fun, but someting ***"