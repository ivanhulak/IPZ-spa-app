import React from 'react';
import { createMember, updateMember } from '../redux/members-reducer';
import AddMembersForm from './AddMembersForm';
import GetMemberByIdForm from './GetMemberByIdForm';
import UpdateMembersForm from './UpdateMemberForm';
import styles from './Fichi.module.css';
import DeleteMembers from './DeleteMembers';
import { useDispatch, useSelector } from 'react-redux';

const Fichi = () => {
   const dispatch = useDispatch();
   const memberId = useSelector(state => state.membersPage.currentMember)

   const createMemberCallback = (memberData) => {
      dispatch(createMember(memberData))
   }
   const updateMemberCallback = (id, memberData) => {
      dispatch(updateMember(id, memberData))
   }
   return <div>
      <div className={styles.formsRow}>
         <DeleteMembers />
         <GetMemberByIdForm />
      </div>
      <div className={styles.formsRow}>
         <AddMembersForm createMember={createMemberCallback} />
         <UpdateMembersForm memberId={memberId} updateMember={updateMemberCallback} />
      </div>
   </div>
}

export default Fichi;