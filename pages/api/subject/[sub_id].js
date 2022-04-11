import nc from "next-connect";
import { deleteSubjectById, getSubjectBysubId, updateSubject } from "../../../controller/student/subject";


const handler = nc()

handler.get(getSubjectBysubId)
handler.put(updateSubject)
handler.delete(deleteSubjectById)

export default handler;