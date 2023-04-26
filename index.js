const Author = require('./Author')

const name = new Author('Magna X')

const post = name.writePost(
  'Titulo do post',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et.'
)

post.addComment('Major_Bl4ck', 'Incrivel!')
post.addComment('Torrada-Atomica', 'ヾ(•ω•`)o')
post.addComment('Torresmo', '🤯🤯🤯')

console.log(name)
console.log(post)
