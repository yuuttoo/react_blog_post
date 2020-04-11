import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {


    render() {
        const {user } = this.props;
        
        if(!user) {//一開始沒有任何資料時props為空
            return <div>Loading...</div>;
        }
 
        return <div className="header">{user.name}</div>;
    }
}


const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId ) };
};

export default connect( 
    mapStateToProps, 
    ) (UserHeader);