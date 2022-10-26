import React from 'react';
import styles from './MemberItem.module.css'
import ava1 from '../../../utils/images/1.png';

const MemberItem = ({name, surname, age, photo, aboutMe}) => {
   return (
      <div className={styles.memberItem}>
         <div className={styles.memberInnerRow}>
            <div className={styles.memberPhoto}>
               <img src={photo ? photo : ava1} alt="" />
            </div>
            <span className={styles.name}>{name} {surname} {age}</span>
            <div className={styles.aboutMember}>{aboutMe}</div>
            <div className={styles.socialsRow}>
               <div className={styles.socialItem}>gitHub</div>
               <div className={styles.socialItem}>facebook</div>
               <div className={styles.socialItem}>instagram</div>
            </div>
         </div>
      </div>
   );
}
export default MemberItem;