import React from 'react';
import './style.css'


// Icons
    import CreateIcon from '@material-ui/icons/Create';

// Components
    import UserProfileImg from "../UserProfileImg"

const PostBox = ({ openCreatePostModal }) => {
    return(
        <div className="postBoxContainer">

            <div className="postBoxUserPicture">
                <UserProfileImg classe="postBoxProfilePic"/> 
            </div>

            <div className="postBoxInfo">
                <a className="postBoxTextInput" onClick={openCreatePostModal}> <CreateIcon fontSize="small" style={{marginRight: '10px'}}/> Criar publicação </a>
            </div>


        </div>
    )
}

export default PostBox;
