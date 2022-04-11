import nc from "next-connect";
import { getAllStudent, saveStudent } from "../../../controller/student/student";




const handler = nc()
handler.get(getAllStudent)
handler.post(saveStudent)

export default handler;