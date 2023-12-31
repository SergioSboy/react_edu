let state = {
    profilePage: {
        postsData: [
            {
                id: 1,
                message: 'Hi, how are you?',
                img: 'https://img.freepik.com/premium-vector/avatar-of-a-woman-with-blond-hair-blue-eyes-and-bob-haircut_427567-4265.jpg'
            },
            {
                id: 2,
                message: 'Hey! My name is Andy',
                img: 'https://img.freepik.com/premium-vector/avatar-of-a-woman-with-black-hair-short-hair-face_427567-610.jpg?w=2000'
            },
        ],
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Misha"},
            {id: 2, name: "Aleksey"},
            {id: 3, name: "Anton"},
            {id: 4, name: "Lioba"},
            {id: 5, name: "Mira"},
            {id: 6, name: "Vadim"},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you? Welcome my site!'},
            {id: 3, message: 'Iam fine'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},
        ],
    },

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        img:'https://img.freepik.com/premium-vector/male-avatar-icon-unknown-or-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-on-white-background-vector-illustration_735449-122.jpg'
    }

    state.profilePage.postsData.push(newPost)
}
export default state;