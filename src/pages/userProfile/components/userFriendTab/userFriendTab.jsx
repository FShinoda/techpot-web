import React from "react";
import "./userFriendTab.css";


/* COMPONENTS */
import FriendRow from "./components/friendRow/friendRow.jsx";


/* IMAGES */
import avt_01 from "../../../../assets/img_avatar_01.png";
import avt_02 from "../../../../assets/img_avatar_02.png";
import avt_03 from "../../../../assets/img_avatar_03.png";
import avt_04 from "../../../../assets/img_avatar_04.png";
import avt_05 from "../../../../assets/img_avatar_05.png";


/* USER FRIEND TAB */
const UserFriendTab = () => {
    return(
        <div className="UserFriendTab">
            {/* TAB HEADING */}
            <div className="UserFriendTab_heading">
                <div className="UserFriendTab_friendTag">
                    <h3>Amigos</h3>
                </div>

                {/* <div className="UserGroupTab_friendOptions">AMPLICAR OPÇÕES PARA GERENCIAR AMIGOS</div> */}
            </div>


            {/* TAB LIST */}
            <div className="UserFriendTab_friendList">
                <div className="UserFriendTab_friendListFirst">
                    <FriendRow redirect={"/editar"} img={avt_01} alt={"Foto de amigo."} friendName={"Márcio Absolutista"} friendCommon={"4"} />
                    <FriendRow redirect={"/editar"} img={avt_02} alt={"Foto de amigo."} friendName={"Curupira Artilheiro"} friendCommon={"3"} />
                    <FriendRow redirect={"/editar"} img={avt_03} alt={"Foto de amigo."} friendName={"Eric Deus Clapton"} friendCommon={"0"} />
                </div>

                <div className="UserFriendTab_friendListSecond">
                    <FriendRow redirect={"/editar"} img={avt_05} alt={"Foto de amigo."} friendName={"Mayushii Desu"} friendCommon={"2"} />
                    <FriendRow redirect={"/editar"} img={avt_04} alt={"Foto de amigo."} friendName={"Chris Lindão"} friendCommon={"1"} />
                    <FriendRow redirect={"/editar"} img={avt_02} alt={"Foto de amigo."} friendName={"Saiki Yare Yare"} friendCommon={"1"} />
                </div>
            </div>
        </div>
    );
};

export default UserFriendTab;
