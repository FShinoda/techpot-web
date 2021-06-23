import React, {useState, useEffect} from "react";
import "./style.css";

// Assets
// import postTestPicture from '../../assets/Flavio.jpg';
import userPlaceholder from "../../assets/img/userPlaceholder.jpg";

// Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

// Components
import BottomLine from "../BottomLine";
import CommentBox from '../CommentSection/Components/CommentBox';
import CreateComment from '../CommentSection/Components/CreateComment';
import CommentSection from "../CommentSection";

// Icons
import {
    FavoriteBorder,
    ChatBubbleOutline,
    MoreVert,
} from "@material-ui/icons";
import {HeartOutlined, HeartFilled} from "@ant-design/icons";
// React router
import {Link} from "react-router-dom";

// Redux
import {useSelector, useDispatch} from "react-redux";
import {likePost, unlikePost, listComments, POST_COMMENTS_CLEANUP} from "../../store/_entities/Post";

// Helpers
import {DateFormatter} from "../../helpers/dateFormatter";
import {formatUserName} from "../../helpers/formatUserName";
import {load} from "dotenv";

const Post = ({
                  post_id,
                  post_body_html,
                  post_body,
                  id_criador,
                  nome_criador,
                  data_criacao,
                  grupo,
                  like_count,
                  comment_count,
                  comment_id,
                  comment_body,
                  comment_user_id,
                  comment_user_name,
                  comment_date,
              }) => {

    // Usuario
    const user_id = useSelector((state) => state.entitie.user.id);

    // Post
    const postLikedByUser = useSelector((state) => state.entitie.post.postsUserLiked);
    const loadPostComments = useSelector((state) => state.entitie.post.postComments);

    const [isPostLiked, setIsPostLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(like_count);
    const [openCommentSection, setOpenCommentSection] = useState(false);
    const [postComments, setPostComments] = useState(loadPostComments);

    const dataCriacao = new DateFormatter(data_criacao);
    let relativeTime = dataCriacao.getRelativeTime();

    const dispatch = useDispatch();

    useEffect(() => {
        if (postLikedByUser.includes(post_id)) setIsPostLiked(!isPostLiked);
    }, []);

    useEffect(() => {
        if(loadPostComments)
            setPostComments(loadPostComments);
    }, [loadPostComments])

    const handleLike = () => {
        setIsPostLiked(true);
        setLikeCount(likeCount + 1);
        dispatch(likePost(user_id, post_id));
    };

    const handleUnlike = () => {
        setIsPostLiked(false);
        setLikeCount(likeCount - 1);
        dispatch(unlikePost(user_id, post_id));
    };

    const loadComments = () => {
        dispatch(POST_COMMENTS_CLEANUP())
        dispatch(listComments(post_id))
        setPostComments(loadPostComments)
        setOpenCommentSection(!openCommentSection);
    }

    // const handleNewComment = () => {}

    return (
        <div className="postContainer font-techpot">
            <div className="postHeader">
                <Link to={`/perfil/${id_criador}/${formatUserName(nome_criador)}`}>
                    <div className="postProfilePictureContainer">
                        <img
                            src={userPlaceholder}
                            alt="postTestPicture"
                            className="postUserPicture"
                        />
                    </div>

                    <div className="postInfo">
                        <p>{formatUserName(nome_criador)}</p>
                        <p className="postInfoSubtext">
                            {relativeTime} | {grupo}
                        </p>
                    </div>
                </Link>

                <div className="postHeader-editAction">
                    <MoreVert/>
                </div>
            </div>

            <div className="postContent">
                <ReactQuill
                    value={post_body_html || ""}
                    readOnly={true}
                    modules={{syntax: true}}
                    theme={"bubble"}
                    style={{padding: 0}}
                />
            </div>

            <BottomLine/>

            <div className="postFooter">
                <div className="postCommentsContainer" onClick={loadComments}>
                    <ChatBubbleOutline className="postIcon"/>
                    <p className="postCommentsText">{comment_count}</p>
                </div>

                <div className="postLikesContainer">
                    <input type="checkbox" className="like-btn"/>
                    <a onClick={!isPostLiked ? handleLike : handleUnlike}>
                        {isPostLiked ? (
                            <HeartFilled className="postIcon"/>
                        ) : (
                            <HeartOutlined className="postIcon"/>
                        )}{" "}
                    </a>
                    <p className="postLikesText">{!likeCount ? "0" : likeCount}</p>
                </div>
            </div>

            <BottomLine/>

            <div className="postLastComment">
                {openCommentSection ?
                    <CommentSection comments={postComments}/>
                    :
                    <CommentBox id={comment_id} content={comment_body} user_id={comment_user_id}
                                username={comment_user_name} date={comment_date}/>
                }
            </div>

            <div className="create-component-container">
                <CreateComment/>
            </div>
        </div>
    );
};

export default Post;
