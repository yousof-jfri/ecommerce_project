const state = {
    products: [
        {
            id: 1,
            name : 'Iphone 11 pro max',
            slug : 'Iphone-11-pro-max',
            category_id: 1,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, modi esse quidem repellat cumque officiis consequuntur, adipisci tempore cupiditate saepe maiores ipsa similique qui facilis facere animi in eius dolorum?',
            attributes: [
                {name: 'Color', values: ['white', 'blue', 'red']},
                {name: 'Ram', values: ['6GB']},
                {name: 'Storage', values: ['128GB']},
            ],
            inventory: 12,
            sells: 8,
            price: 900,
            discount: 5,
            comments: [
                {
                    id: 1,
                    rate:5,   
                    comment: 'this was perfect',
                    user: 'Mahdi Jafari',
                },
                {
                    id: 2,
                    rate:5,   
                    comment: 'this was perfect',
                    user: 'yousef Jafari',
                },
                {
                    id: 3,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Hussan Jafari',
                },
                {
                    id: 4,
                    rate:1,   
                    comment: 'this was perfect',
                    user: 'Mohammad Jafari',
                },
                {
                    id: 5,
                    rate:4,   
                    comment: 'this was perfect',
                    user: 'Sediq Jafari',
                },
            ]
        },
        {
            id: 2,
            name : 'mac book pro',
            slug : 'mac-book-pro',
            category_id: 2,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, modi esse quidem repellat cumque officiis consequuntur, adipisci tempore cupiditate saepe maiores ipsa similique qui facilis facere animi in eius dolorum?',
            attributes: [
                {name: 'Color', values: ['black', 'blue', 'red']},
                {name: 'Ram', values: ['12GB']},
                {name: 'Storage', values: ['1TB']},
            ],
            inventory: 4,
            sells: 2,
            price: 2000,
            discount: 60,
            comments: [
                {
                    id: 6,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Mahdi Jafari',
                },
                {
                    id: 7,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'yousef Jafari',
                },
                {
                    id: 8,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Hussan Jafari',
                },
                {
                    id: 9,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Mohammad Jafari',
                },
                {
                    id: 10,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Sediq Jafari',
                },
            ]
        },
        {
            id: 3,
            name : 'mac book pro',
            slug : 'mac-book-pro',
            category_id: 2,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, modi esse quidem repellat cumque officiis consequuntur, adipisci tempore cupiditate saepe maiores ipsa similique qui facilis facere animi in eius dolorum?',
            attributes: [
                {name: 'Color', values: ['black', 'blue', 'red']},
                {name: 'Ram', values: ['12GB']},
                {name: 'Storage', values: ['1TB']},
            ],
            inventory: 4,
            sells: 0,
            price: 2000,
            discount: 0,
            comments: [
                {
                    id: 11,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Mahdi Jafari',
                },
                {
                    id: 12,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'yousef Jafari',
                },
                {
                    id: 13,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Hussan Jafari',
                },
                {
                    id: 14,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Mohammad Jafari',
                },
                {
                    id: 15,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Sediq Jafari',
                },
            ]
        },
        {
            id: 4,
            name : 'mac book pro',
            slug : 'mac-book-pro',
            category_id: 2,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, modi esse quidem repellat cumque officiis consequuntur, adipisci tempore cupiditate saepe maiores ipsa similique qui facilis facere animi in eius dolorum?',
            attributes: [
                {name: 'Color', values: ['black', 'blue', 'red']},
                {name: 'Ram', values: ['12GB']},
                {name: 'Storage', values: ['1TB']},
            ],
            inventory: 4,
            sells: 4,
            price: 10000,
            discount: 3,
            comments: [
                {
                    id: 16,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Mahdi Jafari',
                },
                {
                    id: 17,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'yousef Jafari',
                },
                {
                    id: 18,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Hussan Jafari',
                },
                {
                    id: 19,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Mohammad Jafari',
                },
                {
                    id: 20,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Sediq Jafari',
                },
            ]
        },
        {
            id: 5,
            name : 'mac book pro',
            slug : 'mac-book-pro',
            category_id: 2,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, modi esse quidem repellat cumque officiis consequuntur, adipisci tempore cupiditate saepe maiores ipsa similique qui facilis facere animi in eius dolorum?',
            attributes: [
                {name: 'Color', values: ['black', 'blue', 'red']},
                {name: 'Ram', values: ['12GB']},
                {name: 'Storage', values: ['1TB']},
            ],
            inventory: 4,
            sells: 3,
            price: 2000,
            discount: 33,
            comments: [
                {
                    id: 21,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Mahdi Jafari',
                },
                {
                    id: 22,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'yousef Jafari',
                },
                {
                    id: 23,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Hussan Jafari',
                },
                {
                    id: 24,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Mohammad Jafari',
                },
                {
                    id: 25,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Sediq Jafari',
                },
            ]
        },
        {
            id: 6,
            name : 'mac book pro',
            slug : 'mac-book-pro',
            category_id: 2,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, modi esse quidem repellat cumque officiis consequuntur, adipisci tempore cupiditate saepe maiores ipsa similique qui facilis facere animi in eius dolorum?',
            attributes: [
                {name: 'Color', values: ['black', 'blue', 'red']},
                {name: 'Ram', values: ['12GB']},
                {name: 'Storage', values: ['1TB']},
            ],
            inventory: 4,
            sells: 1,
            price: 2000,
            discount: 20,
            comments: [
                {
                    id: 26,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Mahdi Jafari',
                },
                {
                    id: 27,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'yousef Jafari',
                },
                {
                    id: 28,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Hussan Jafari',
                },
                {
                    id: 29,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Mohammad Jafari',
                },
                {
                    id: 30,
                    rate:3,   
                    comment: 'this was perfect',
                    user: 'Sediq Jafari',
                },
            ]
        },
    ],

    loading: false,

    currentProduct : [],

    searchProducts : [],
};
const getters = {
    // return all the products
    allProducts : state => state.products,

    // return all the products with discount
    discountPorducts : state => { 
        let products = state.products;
        products = products.filter(product => product.discount != 0)
        return products;
    },

    getCurrentProduct: state => state.currentProduct,

    // return the products filtered by search
    getSearchProducts: state => state.searchProducts,
};

const actions = {
    // get the current product
    fetchProduct({ commit }, id)
    {
        // set the loading on
        commit('setLoading', true);

        // find and set selected product
        commit('getProduct', id)

        // set the loading off
        commit('setLoading', false);
    },

    // search products
    searchProduct({ commit }, text)
    {
        commit('getSearchedProduct', text);
    }
};
const mutations = {
    // set loading
    setLoading: (state, loading) => state.loading = loading,

    // find product and take that
    getProduct(state, id) {
        let product;
        product = state.products.find((product) => product.id == id)
        state.currentProduct = product;
    },

    // get products by search
    getSearchedProduct(state, text)
    {   
        let products = JSON.parse(JSON.stringify(state.products));
        products = products.filter((product) => {
            let name = product.name.toLocaleLowerCase()
            return name.indexOf(text) != -1
        })
        state.searchProducts = products
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};