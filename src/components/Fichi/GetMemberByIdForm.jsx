import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMemberById } from '../redux/members-reducer';

const GetMemberByIdForm = () => {
   const [idValue, setIdValue] = useState('')
   const dispatch = useDispatch()

   const setMemberForUpdate = () => {
      dispatch(getMemberById(idValue))
      setIdValue('')
   }

   return <div>
      <h3>Отримати учасника по Id</h3>
      <div>
         <div>Бажаний учасник id:</div>
         <input type="text" placeholder='Введідь id:' onChange={(e) => setIdValue(e.currentTarget.value)} value={idValue} />
      </div>
      <button onClick={setMemberForUpdate}>Отримати учасника</button>
   </div>
}

export default GetMemberByIdForm;