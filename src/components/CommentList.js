import React, {Component} from "react";
import {connect} from "react-redux";

class CommentList extends Component {

renderComments() {
    return this.props.comments.map(comment => {
        return <li key={comment}>{comment}</li>
    });
};

render(){
    return(
        <div> 
            <ul>
                <h4>Comment List</h4>
                {this.renderComments()}
            </ul>
        </div>
        );   
    };   
};

function mapStateToProps(state){
    console.log("state", state)
    return { comments: state.comments }
};

export default connect(mapStateToProps)(CommentList);