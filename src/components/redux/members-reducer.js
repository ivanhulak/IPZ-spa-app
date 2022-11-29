import { membersAPI } from '../DAL/api';

const SET_MEMBERS = 'SET_MEMBERS';
const SET_MEMBER_EXAMPLE = 'SET_MEMBER_EXAMPLE';
const SET_CURRENT_MEMBER = 'SET_CURRENT_MEMBER';

let initialState = {
   members: [],
   memberExample: {
      name: "Dog",
      surname: "Cat",
      age: 20,
      location: {
         state: "Test oblast",
         city: "Test"
      },
      photo: "https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png",
      aboutMe: "test",
      socials: {
         facebook: "",
         instagram: "https://www.instagram.com/vanya_hulak/?next=%2F",
         gitHub: ""
      },
      hobby: "test"
   },
   currentMember: ''
}

const membersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_MEMBERS:
         return { ...state, members: action.members };
      case SET_MEMBER_EXAMPLE:
         return { ...state, memberExample: action.member };
      case SET_CURRENT_MEMBER:
         return { ...state, currentMember: action.memberId };
      default: return state;
   }
}

const setMembers = (members) => ({ type: 'SET_MEMBERS', members });
const setMemberExample = (member) => ({ type: 'SET_MEMBER_EXAMPLE', member });
const setCurrentMember = (memberId) => ({ type: 'SET_CURRENT_MEMBER', memberId });

// Thunk creators
export const requestMembers = () => {
   return async (dispatch) => {
      let data = await membersAPI.requestMembers();
      dispatch(setMembers(data))
   }
}
export const getMemberById = (memberId) => {
   return async (dispatch) => {
      let data = await membersAPI.getMemberById(memberId);
      dispatch(setMemberExample(data))
      dispatch(setCurrentMember(memberId))
   }
}
export const deleteMember = (memberId) => (dispatch) => {
   membersAPI.deleteMemberById(memberId)
      .then(response => {
         if (response.status === 200) {
            alert(`Учаник #${memberId} видалений`)
         } else {
            alert(`Учаника #${memberId} не існує`)
         }
      })
}
export const createMember = (memberData) => {
   return async (dispatch) => {
      await membersAPI.createMember(memberData).then(data => {
         alert(`Учаник #${data.name} ${data.surname} створений`)
      });
      dispatch(requestMembers())
   }
}
export const updateMember = (memberId, memberData) => {
   return async (dispatch) => {
      await membersAPI.updateMember(memberId, memberData).then(data => {
         alert(`Учаник #${data.name} ${data.surname} оновлений`)
      });
      dispatch(requestMembers())
   }
}


export default membersReducer;