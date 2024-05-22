const express = require('express');
const controllers = require('./src/controllers');

const server = express();

server.use('/users', controllers.users);
server.use('/posts', controllers.posts);
server.use('/health', controllers.health);

server.use((req, res) => {
    res.status(404).send(`\n
		Not found!
		Requested path: ${req.originalUrl}
	\n`)
});

server.listen(3000, () => {
    console.log(`
		Express API is active at http://localhost:3000

		List of endpoints:
		
		/health - healthcheck of the service.

		/users - get all users.
		/users/<id> - get user by id.

		/posts - get all posts.
		/posts/<id> - get post by id.
	`);
});