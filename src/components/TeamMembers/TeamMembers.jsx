import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MemberItem from './Member/MemberItem';
import styles from './TeamMembers.module.css';

const TeamMembers = (props) => {
   const [visibleMode, setVisible] = useState(false);
   useEffect(() => {
      props.requestMembers();
   }, [])
   const toggleVisibleMode = () => {
      setVisible(prev => !prev)
   }
   const membersElements = props.members.map(m => <MemberItem key={m.id} name={m.name}
      surname={m.surname} age={m.age} photo={m.photo} aboutMe={m.aboutMe} />)

   return (
      <div className={styles.members}>
         <div className={styles.membersTop}>
            <div className={styles.title}>Team Members</div>
            <button onClick={toggleVisibleMode} className={styles.uploadBtn}><span>{visibleMode ? 'Скрити учасників' : 'Завантажити учасників'}</span></button>
         </div>
         <div className={styles.membersRow}>
            {visibleMode ? membersElements : null}
         </div>
      </div>
   );
}

export default TeamMembers;