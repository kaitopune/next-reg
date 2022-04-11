import nc from "next-connect";
import { getAllSubject, saveSubject } from "../../../controller/student/subject";

const handler = nc()

handler.get(getAllSubject)
handler.post(saveSubject)


export default handler;