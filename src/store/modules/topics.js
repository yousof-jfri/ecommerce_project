const state = {
    topics: [
        {
            id: 1,
            title: 'Apples New Smart watches',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam delectus ab numquam. Vero ipsum quaerat esse omnis commodi sit ab, iste eos iusto consequuntur aperiam. Molestiae expedita natus a?',
            views: 4123,
            likes: 1040,
            user: {
                id: 1,
                name: 'yousef Jafari',
                email: 'titan.2018.yj@gmail.com',
            },
            created_at: '2022/4/5',
        },
        {
            id: 2,
            title: 'Elon Musk bought Twitter!',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam delectus ab numquam. Vero ipsum quaerat esse omnis commodi sit ab, iste eos iusto consequuntur aperiam. Molestiae expedita natus a?',
            views: 10031,
            likes: 5040,
            user: {
                id: 1,
                name: 'yousef Jafari',
                email: 'titan.2018.yj@gmail.com',
            },
            created_at: '2022/4/6',
        },
        {
            id: 3,
            title: 'Tesla lost 120 bilion dollors!',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam delectus ab numquam. Vero ipsum quaerat esse omnis commodi sit ab, iste eos iusto consequuntur aperiam. Molestiae expedita natus a?',
            views: 10031,
            likes: 5040,
            user: {
                id: 2,
                name: 'Hamed Jafari',
                email: 'Hamed@gmail.com',
            },
            created_at: '2021/9/12',
        },
        {
            id: 4,
            title: 'Windows 11 is Coming soon!',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam delectus ab numquam. Vero ipsum quaerat esse omnis commodi sit ab, iste eos iusto consequuntur aperiam. Molestiae expedita natus a?',
            views: 1031,
            likes: 540,
            user: {
                id: 1,
                name: 'yousef Jafari',
                email: 'titan.2018.yj@gmail.com',
            },
            created_at: '2021/12/29',
        },
        {
            id: 5,
            title: 'Why we have to use Apple smart watches',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam delectus ab numquam. Vero ipsum quaerat esse omnis commodi sit ab, iste eos iusto consequuntur aperiam. Molestiae expedita natus a?',
            views: 811,
            likes: 340,
            user: {
                id: 1,
                name: 'yousef Jafari',
                email: 'titan.2018.yj@gmail.com',
            },
            created_at: '2022/5/29',
        },
    ],
};
const getters = {
    // return all the topics
    allTopics: state => state.topics,
};
const actions = {};
const mutations = {
    // add new like to the selected topic
    addNewLike(state, id){
        let likedTopic = state.topics.find(topic => {
            return topic.id == id
        })
        likedTopic.likes += 1;
    },

    // remove like from topic
    removeLike(state, id){
        let likedTopic = state.topics.find(topic => {
            return topic.id == id
        })
        likedTopic.likes -= 1;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}