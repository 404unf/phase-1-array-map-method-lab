const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorials = tutorials.map(function(title) {
    let newTitle = []
    const words = title.split(' ')
    for (let i = 0;i < words.length; i++) {
      const newWord = words[i].charAt(0).toUpperCase() + words[i].slice(1)
      newTitle.push(newWord)
    }
    title = newTitle.join(' ')
    return title
  })
  return newTutorials
}
