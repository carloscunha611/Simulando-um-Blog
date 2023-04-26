const Comment = require('./Comment')

class Post {
  constructor(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.comment = []
    this.createAt = new Date()
  }

  addComment(username, content) {
    this.comment.push(new Comment(username, content))
  }
}

module.exports = Post
