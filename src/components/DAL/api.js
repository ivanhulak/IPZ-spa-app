import axios from 'axios';

let instance = axios.create({
   baseURL: 'http://localhost:18080/',
   // baseURL: 'http://localhost:28080/',
   // withCredentials: false,
   // mode: 'no-cors',
   // headers: {
      // 'Access-Control-Allow-Origin': '*'
      // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      // 'API-KEY': '0f7ca0a1-1142-4ef6-a871-38727982b107'
   // }
})

export const membersAPI = {
   requestMembers() {
      return instance.get(`members`).then(response => response.data)
      // return instance.get(`persons`)
   },
   deleteMemberById(memberId) {
      return instance.delete(`members/${memberId}`)
      // return instance.get(`persons/${memberId}`)
   },
   createMember(memberData) {
      return instance.post(`members`, memberData).then(response => response.data)
   },
   updateMember(memberId, memberData) {
      return instance.put(`members/${memberId}`, memberData).then(response => response.data)
   },
   getMemberById(memberId) {
      return instance.get(`members/${memberId}`).then(response => response.data)
   }
}