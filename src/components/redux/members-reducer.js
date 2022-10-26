import { membersAPI } from '../DAL/api';

const SET_MEMBERS = 'SET_MEMBERS';

let initialState = {
   members: [
      {
         id: 1,
         name: 'Ivan',
         surname: 'Hulak',
         age: 20,
         location: { state: 'Zhytomyr oblast', city: 'Zhytomyr' },
         photo: 'https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png',
         aboutMe: 'I am Ivan Hulak. Cool man who are learning programming. yoy',
         socials: {
            facebook: '',
            instagram: '',
            gitHub: '',
         },
         hobby: 'football, tennis, billiard'
      },
      {
         id: 2,
         name: 'Iryna',
         surname: 'Stefanovych',
         age: 20,
         location: { state: 'Kyiv oblast', city: 'Kyiv' },
         photo: 'https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png',
         aboutMe: 'I am Iryna Stefanovych. Cool girl who are learning programming. yoy',
         socials: {
            facebook: '',
            instagram: '',
            gitHub: '',
         },
         hobby: 'dance, music'
      },
      {
         id: 3,
         name: 'Dana',
         surname: 'Ostrovska',
         age: 20,
         location: { state: 'Kyiv oblast', city: 'Kyiv' },
         photo: 'https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png',
         aboutMe: 'I am Dana Ostrovska. Cool girl who are learning programming. yoy',
         socials: {
            facebook: '',
            instagram: '',
            gitHub: '',
         },
         hobby: 'dance, music'
      },
      {
         id: 4,
         name: 'Vitalii',
         surname: 'Hutov',
         age: 20,
         location: { state: 'Kyiv oblast', city: 'Kyiv' },
         photo: 'https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png',
         aboutMe: 'I am Vitalii Hutov. Cool man who are learning programming. yoy',
         socials: {
            facebook: '',
            instagram: '',
            gitHub: '',
         },
         hobby: 'proga, backend, spring'
      },
   ],
}

const membersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_MEMBERS:
         return { ...state, members: [...state.members, action.members] };
      default: return state;
   }
}

const setMembers = (members) => ({ type: 'SET_MEMBERS', members });

export const requestMembers = () => (dispatch) => {
   membersAPI.requestMembers().then(data => {
      dispatch(setMembers(data.items));
   })
}

export default membersReducer;