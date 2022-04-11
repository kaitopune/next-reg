import nc from "next-connect";

import { deleteStudentById, getAllStudentById, updateStudent } from "../../../controller/student/student";




const handler = nc()
handler.get(getAllStudentById)
handler.put(updateStudent)
handler.delete(deleteStudentById)

export default handler;