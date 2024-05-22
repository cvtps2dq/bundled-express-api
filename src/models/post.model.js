/**
 * Model for manipulating posts
 */

const posts = [
    {
        id: 1,
        title: 'Welcome to zen-project!',
        content: 'zen-project is a linux distribution, that makes your workflow go easy.',
        author: 'cv2-zen-project'
    },
    {
        id: 2,
        title: 'Fedora is a best linux distribution, imo.',
        content: 'The rpm | dnf | yum package managers are best. Fedora just works.',
        author: 'cv2'
    }
];

const getAllPosts = () => posts;

const getPostById = (id) => posts.find((post) => post.id === parseInt(id));

module.exports = {
    getAllPosts,
    getPostById,
};