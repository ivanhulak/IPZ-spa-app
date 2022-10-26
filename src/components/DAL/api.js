import axios from 'axios';

let instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': '0f7ca0a1-1142-4ef6-a871-38727982b107'
   }
})

export const membersAPI = {
   requestMembers() {
      return instance.get(`users?count=4&page=1`)
         .then(response => response.data);
   }
}