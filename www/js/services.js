angular.module('starter.services', [])

.factory('Menu', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var menu = [
    {
      id: 1,
      name: "Appetizes",
      thumb: 'img/categories/appetizes.png',
      items: []
    },
    {
      id: 2,
      name: "Sides",
      thumb: 'img/categories/sides.png',
      items: []
    },
    {
      id: 3,
      name: "Desserts",
      thumb: 'img/categories/desserts.png',
      items: []
    },
    {
      id: 4,
      name: "Salads",
      thumb: 'img/categories/salad.jpg',
      items: []
    },
    {
      id: 5,
      name: "Main cours",
      thumb: 'img/categories/entree.jpg',
      items: []
    }
  ];

  return {
    all: function() {
      return menu;
    }
  };
})

.factory('Categories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categories = [
    {
      id: 1,
      name: "Entrees",
      thumb: 'img/categories/entree.jpg',
      items: [
        {
          id: 1,
          name: "Seared tuna",
          price: 14.20,
          thumb: "img/items/seared_tuna.jpg"
        },
        {
          id: 2,
          name: "Rib eye",
          price: 15.20,
          thumb: "img/items/rib_eyes.jpg"
        },
        {
          id: 3,
          name: "Brick chicken",
          price: 16.20,
          thumb: "img/items/brick_chicken.jpg"
        },
        {
          id: 4,
          name: "Fried calamari",
          price: 17.20,
          thumb: "img/items/fried_calamari.jpg"
        },
        {
          id: 5,
          name: "Zuppa",
          price: 17.20,
          thumb: "img/items/zuppa.jpg"
        }
      ]
    },
    {
      id: 2,
      name: "Drinks",
      thumb: 'img/categories/drink.jpg',
      items: []
    },
    {
      id: 3,
      name: "Salads",
      thumb: 'img/categories/salad.jpg',
      items: []
    },
    {
      id: 4,
      name: "Fruits",
      thumb: 'img/categories/fruit.jpg',
      items: []
    },
    {
      id: 5,
      name: "Pizzas",
      thumb: 'img/categories/pizza.jpg',
      items: []
    },
    {
      id: 6,
      name: "Sushi",
      thumb: 'img/categories/sushi.jpg',
      items: []
    },
    {
      id: 7,
      name: "Buggers",
      thumb: 'img/categories/bugger.jpg',
      items: []
    },
  ];

  return {
    all: function() {
      return categories;
    },
    remove: function(cat) {
      categories.splice(categories.indexOf(cat), 1);
    },
    get: function(catId) {
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].id === parseInt(catId)) {
          return categories[i];
        }
      }
      return null;
    }
  };
})
.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [
    {
      id: 1,
      name: "Rib eye steak",
      price: 14.20,
      offer: 40,
      thumb: "img/items/thumbs/rib_eyes.jpg",
      images: [
        "img/items/rib_eye_2.jpg",
        "img/items/rib_eye_3.jpg",
        "img/items/rib_eye_4.jpg"
      ],
      description: "Beef steak, sauce, french fries",
      faved: true,
      options: [
        {
          id: 1,
          name: "Tomatoes"
        },
        {
          id: 2,
          name: "Olives"
        },
        {
          id: 3,
          name: "Oregano"
        }
      ],
      extras: [
        {
          id: 1,
          name: "Cheese",
          price: 1.2
        }
      ],
      sizes: [
        {
          id: 1,
          name: "Standard",
          price: 8
        },
        {
          id: 2,
          name: "Large",
          price: 12
        }
      ],
      reviews: [
        {
          id: 1,
          user_id: 1,
          username: "Adam",
          face: "img/people/adam.jpg",
          text: "Incredibly delicious tender steak! Be sure to order more",
          images: []
        },
        {
          id: 2,
          user_id: 3,
          username: "Ben",
          face: "img/people/ben.png",
          text: "Mmm.... Amazing! Steaks are very good",
          images: []
        },
        {
          id: 3,
          user_id: 3,
          username: "Max",
          face: "img/people/max.png",
          text: "Incredibly delicious tender steak! Be sure to order more",
          images: []
        }
      ]
    },
    {
      id: 2,
      name: "Seared Tuna",
      price: 15.20,
      offer: 20,
      thumb: "img/items/thumbs/seared_tuna.jpg"
    },
    {
      id: 3,
      name: "Brick chicken",
      price: 16.20,
      offer: 40,
      thumb: "img/items/thumbs/brick_chicken.jpg"
    },
    {
      id: 4,
      name: "Fried calamari",
      price: 17.20,
      offer: 50,
      thumb: "img/items/thumbs/fried_calamari.jpg"
    },
    {
      id: 5,
      name: "Zuppa",
      price: 17.20,
      offer: 20,
      thumb: "img/items/thumbs/zuppa.jpg"
    }
  ];

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    }
  };
})
.factory('Cart', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cart = {
    shipping: 6,
    total: 166,
    items: [
      {
        id: 2,
        name: "Seared Tuna",
        price: 15.20,
        thumb: "img/items/thumbs/seared_tuna.jpg",
        quantity: 2
      },
      {
        id: 3,
        name: "Brick chicken",
        price: 16.20,
        thumb: "img/items/thumbs/brick_chicken.jpg",
        quantity: 3
      },
      {
        id: 4,
        name: "Fried calamari",
        price: 17.20,
        thumb: "img/items/thumbs/fried_calamari.jpg",
        quantity: 1
      },
      {
        id: 5,
        name: "Zuppa",
        price: 17.20,
        thumb: "img/items/thumbs/zuppa.jpg",
        quantity: 2
      }
    ]
  };

  return {
    get: function() {
      return cart;
    }
  };
})

.factory('Chats', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
    {
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/people/ben.png',
      messages: [
        {
          type: 'received',
          text: 'Hey, How are you? wanna hang out this friday?',
          image: '',
          time: 'Thursday 05:55 PM'
        },
        {
          type: 'sent',
          text: 'Good, Yes sure why not :D',
          image: '',
          time: 'Thursday 05:56 PM'
        },
        {
          type: 'received',
          text: 'Check out this view from my last trip',
          image: '',
          time: 'Thursday 05:57 PM'
        },
        {
          type: 'sent',
          text: 'Looks Great is that view in Canada?',
          image: '',
          time: 'Thursday 05:58 PM'
        },
        {
          type: 'received',
          text: 'Yes, it\'s in Canada',
          image: '',
          time: 'Thursday 05:57 PM'
        }
      ]
    },
    {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/people/max.png'
    },
    {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/people/adam.jpg'
    },
    {

      d: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/people/perry.png'
    },
    {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/people/mike.png'
    },
    {
      id: 5,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/people/ben.png'
    },
    {
      id: 6,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/people/max.png'
    }
  ];

  return {
    all: function () {
      return chats;
    },
    remove: function (chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function (chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Posts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var posts = [
    {
      id: 1,
      title: 'Lorem Ipsum is simply',
      thumb: 'img/items/thumbs/brick_chicken.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
      id: 2,
      title: 'Lorem Ipsum is simply',
      thumb: 'img/items/thumbs/fried_calamari.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
      id: 3,
      title: 'Lorem Ipsum is simply',
      thumb: 'img/items/thumbs/marsala_chicken.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
      id: 4,
      title: 'Lorem Ipsum is simply',
      thumb: 'img/items/thumbs/rib_eyes.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
      id: 5,
      title: 'Lorem Ipsum is simply',
      thumb: 'img/items/thumbs/seared_tuna.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
      id: 6,
      title: 'Lorem Ipsum is simply',
      thumb: 'img/items/thumbs/zuppa.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    },
    {
      id: 7,
      title: 'Lorem Ipsum is simply',
      thumb: 'img/items/thumbs/brick_chicken.jpg',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever si"
    }
  ];

  return {
    all: function() {
      return posts;
    },
    remove: function(post) {
      posts.splice(posts.indexOf(post), 1);
    },
    get: function(postId) {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(postId)) {
          return posts[i];
        }
      }
      return null;
    }
  };
})
