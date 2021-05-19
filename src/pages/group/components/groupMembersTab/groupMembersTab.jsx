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


/* GROUP MEMBERS TAB */
const GroupMembersTab = () => {
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
                <div className="GroupMembersTab-first">
                    <MemberRow redirect={"/editar"} img={avt_01} alt={"Foto de membro."} memberName={"Márcio Absolutista"} memberNick={"@absolutista"} />
                    <MemberRow redirect={"/editar"} img={avt_02} alt={"Foto de membro."} memberName={"Curupira Artilheiro"} memberNick={"@pira_art"} />
                    <MemberRow redirect={"/editar"} img={avt_03} alt={"Foto de membro."} memberName={"Eric Deus Clapton"} memberNick={"@deus_palmatom"} />
                </div>

                <div className="GroupMembersTab-second">
                    <MemberRow redirect={"/editar"} img={avt_05} alt={"Foto de membro."} memberName={"Mayushii Desu"} memberNick={"@mayushii_desu!"} />
                    <MemberRow redirect={"/editar"} img={avt_04} alt={"Foto de membro."} memberName={"Chris Lindão"} memberNick={"@O_Lindo"} />
                    <MemberRow redirect={"/editar"} img={avt_02} alt={"Foto de membro."} memberName={"Saiki Yare Yare"} memberNick={"@yare_yare"} />
                </div>
            </div>
        </div>
    );
};

export default GroupMembersTab;
