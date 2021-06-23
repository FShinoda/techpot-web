import React from "react";
import "./userGroupTab.css";

/* COMPONENTS */
import GroupRow from "./components/groupRow/groupRow.jsx";

/* IMAGES */
import avt_01 from "../../../../assets/rock-lee.jpg";
import avt_02 from "../../../../assets/ednaldo-pereira-stars.jpg";
import avt_03 from "../../../../assets/farra-pinga-e-foguete.jpg";
import avt_04 from "../../../../assets/academia-de-platao.jpg";
import avt_05 from "../../../../assets/SPFC.png";
import avt_06 from "../../../../assets/poneis-malditos.jpeg";

// Redux
import { useSelector } from 'react-redux';

/* USER GROUP TAB */
const UserGroupTab = () => {

    const groupList = useSelector(state => state.entitie.group.groupList);

    return(
        <div className="UserGroupTab">
            {/* TAB HEADING */}
            <div className="UserGroupTab_heading">
                <div className="UserGroupTab_groupTag">
                    <h3>Grupos</h3>
                </div>

                {/* <div className="UserGroupTab_groupOptions">AMPLICAR OPÇÕES PARA GERENCIAR GRUPOS</div> */}
            </div>


            {/* TAB LIST */}
            <div className="UserGroupTab_groupList">
                {groupList.map((group) => (
                    <GroupRow redirect={"/editar"} img={avt_01} alt={"Foto de grupo."} groupName={group.group_name} membersCount={group.group_members_count} />
                ))}
            </div>
        </div>
    );
};

export default UserGroupTab;
