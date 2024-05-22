/**
 * Model for manipulating users
 */

const users = [
    {
        id: '1',
        name: 'cv2',
        email: 'cv2@zen-project.com',
        password: '123'
    },
    {
        id: '2',
        name: 'ilovefedora',
        email: 'getitnow@fedora.org',
        password: '123'
    }
];

const getAllUsers = () => users;

const getUserById = (id) => users.find((post) => post.id === id);

module.exports = {
    getAllUsers,
    getUserById,
};