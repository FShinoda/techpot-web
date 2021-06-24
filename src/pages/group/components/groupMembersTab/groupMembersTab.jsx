import React from "react";
import "./groupMembersTab.css";


/* COMPONENTS */
import MemberRow from "./components/memberRow/memberRow.jsx";


/* IMAGES */
import avt_01 from "../../../../assets/img_avatar_01.png";
import avt_02 from "../../../../assets/img_avatar_02.png";
import avt_03 from "../../../../assets/img_avatar_03.png";
import avt_04 from "../../../../assets/img_avatar_04.png";
import avt_05 from "../../../../assets/img_avatar_05.png";

// Helpers
import { formatUserName } from '../../../../helpers/formatUserName';


/* GROUP MEMBERS TAB */
const GroupMembersTab = ({ members }) => {
    return(
        <div className="GroupMembersTab">
            {/* TAB HEADING */}
            <div className="GroupMembersTab-heading">
                <div className="GroupMembersTab-memberTag">
                    <h3>Membros</h3>
                </div>

                {/* <div className="GroupMembersTab-options">AMPLICAR OPÇÕES PARA GERENCIAR MEMBROS</div> */}
            </div>


            {/* TAB LIST */}
            <div className="GroupMembersTab-memberList">
                {members.map((user) => (
                    <MemberRow redirect={`/perfil/${user.user_id}/${user.user_username}`} img={avt_01} alt={"Foto de membro."} memberName={formatUserName(user.user_name)} memberNick={"@" + user.user_username} />
                ))}
            </div>
        </div>
    );
};

export default GroupMembersTab;
