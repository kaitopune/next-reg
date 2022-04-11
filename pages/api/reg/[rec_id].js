import nc from "next-connect";
import { deleteRegisterRecordByrec_Id } from "../../../controller/student/regsubject";





const handler = nc()
handler.delete(deleteRegisterRecordByrec_Id)

export default handler;