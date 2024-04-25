import Blogpostpic from "../assets/images/pixel-bg.jpg";
import avatar from "../assets/images/avatar.png";
// Product Reducer
const initialProductsState = {
    productsdata: [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ],
    blogpost: [
      { id: 1, catagoryname: 'Business', cardpostimg: Blogpostpic, avatarimg: avatar,  blogpostname: 'Conduct at an replied removal an amongst', blogpostdesc: 'However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...', datemodified: '28 February 2019'  },
      { id: 2, catagoryname: 'Travel', cardpostimg: Blogpostpic, avatarimg: avatar,  blogpostname: 'Off tears are day blind smile alone had ready', blogpostdesc: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...', datemodified: '02 February 2022'  },
      { id: 3, catagoryname: 'Business', cardpostimg: Blogpostpic, avatarimg: avatar,  blogpostname: 'Conduct at an replied removal an amongst', blogpostdesc: 'However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...', datemodified: '25 April 2024'},
      { id: 4, catagoryname: 'Technology', cardpostimg: Blogpostpic, avatarimg: avatar,  blogpostname: 'Conduct at an replied removal an amongst', blogpostdesc: 'However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...', datemodified: '25 April 2024'}
    ],
    bloglist: [
      { id: 1, username: 'John Smith', avatarimg: avatar,  blogpostname: 'Conduct at an replied removal an amongst', blogpostdesc: 'However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...', datemodified: '28 February 2019', buttonname: 'view detail'  },
      { id: 2, username: 'John Smith', avatarimg: avatar,  blogpostname: 'Conduct at an replied removal an amongst', blogpostdesc: 'However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...', datemodified: '28 February 2019', buttonname: 'view detail'  },
      { id: 3, username: 'John Smith', avatarimg: avatar,  blogpostname: 'Conduct at an replied removal an amongst', blogpostdesc: 'However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...', datemodified: '28 February 2019', buttonname: 'view detail'  }
    ],
};
const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
      case 'UPDATE_PRODUCTS':
        return {
          ...state,
          products: action.payload,
      };
      default:
        return state;
    }
};

export default productsReducer;