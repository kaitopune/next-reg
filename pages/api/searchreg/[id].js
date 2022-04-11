import nc from "next-connect";

import { getAllStudentById, getSubjectById } from "../../../controller/student/student";




const handler = nc()
handler.get(getSubjectById)

export default handler;