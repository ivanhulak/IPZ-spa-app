import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteMember } from '../redux/members-reducer';

const DeleteMembers= () => {

   const [value, setValue] = useState('')
   const dispatch = useDispatch()

   const deleteMemberCallback = () => {
      dispatch(deleteMember(value))
      setValue('')
   }

   return <div>
      <h3>Видалити учасника по Id</h3>
      <div>
         <div>Введідь Id</div>
         <input type="text" placeholder='Введідь id:' onChange={(e) => setValue(e.currentTarget.value)} value={value}/>
      </div>
      <button onClick={deleteMemberCallback}>Видалити учасника</button>
   </div>
}

export default DeleteMembers;