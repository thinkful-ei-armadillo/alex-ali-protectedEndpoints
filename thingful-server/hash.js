const bcrypt = require('bcryptjs')

function hash(string, salt) {
bcrypt.hash(string, salt).then(hash => console.log({ hash }))
}

hash('sam-password', 12)
hash('lex-password', 12)
hash('ping-password', 12)
