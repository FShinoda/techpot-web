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


/* USER GROUP TAB */
const UserGroupTab = () => {
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
                <div className="UserGroupTab_groupListFirst">
                    <GroupRow redirect={"/editar"} img={avt_01} alt={"Foto de grupo."} groupName={"Rock Lee do Pagode Namora D+"} membersCount={"163"} />
                    <GroupRow redirect={"/editar"} img={avt_02} alt={"Foto de grupo."} groupName={"Amantes do Ednaldo Pereira"} membersCount={"36952"} />
                    <GroupRow redirect={"/editar"} img={avt_03} alt={"Foto de grupo."} groupName={"Farra, Pinga e Foguete"} membersCount={"1992"} />
                </div>

                <div className="UserGroupTab_groupListSecond">
                    <GroupRow redirect={"/editar"} img={avt_04} alt={"Foto de grupo."} groupName={"Academia de Platão"} membersCount={"1"} />
                    <GroupRow redirect={"/editar"} img={avt_05} alt={"Foto de grupo."} groupName={"Tricolor é só vitória!!"} membersCount={"15564"} />
                    <GroupRow redirect={"/editar"} img={avt_06} alt={"Foto de grupo."} groupName={"Fã Clube dos Pôneis Malditos"} membersCount={"82"} />
                </div>
            </div>
        </div>
    );
};

export default UserGroupTab;
