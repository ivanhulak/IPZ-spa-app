import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMembers } from '../redux/members-reducer';
import MemberItem from './Member/MemberItem';
import styles from './TeamMembers.module.css';

const TeamMembers = () => {
   const [visibleMode, setVisible] = useState(false);
   const dispatch = useDispatch();
   const members = useSelector(state => state.membersPage.members)

   useEffect(() => {
      dispatch(requestMembers());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const toggleVisibleMode = () => {
      setVisible(prev => !prev)
   }
   const membersElements = members.map(m => <MemberItem key={m._id} name={m.name}
         surname={m.surname} age={m.age} photo={m.photo} aboutMe={m.aboutMe} />)

   return (
      <div className={styles.members}>
         <div className={styles.membersTop}>
            <div className={styles.title}>Team Members</div>
            <button onClick={toggleVisibleMode} className={styles.uploadBtn}><span>{visibleMode ? 'Скрити учасників' : 'Показати учасників'}</span></button>
         </div>
         <div className={styles.membersRow}>
            {visibleMode ? membersElements : null}
         </div>
      </div>
   );
}

export default TeamMembers;