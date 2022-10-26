import { requestMembers } from '../redux/members-reducer';
import TeamMembers from './TeamMembers';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      members: state.membersPage.members,
   }
}

export default connect(mapStateToProps, { requestMembers })(TeamMembers);