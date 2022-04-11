import nc from "next-connect";
import { getAllRegisterRecord, saveRegisterRecord } from "../../../controller/student/regsubject";




const handler = nc()
handler.get(getAllRegisterRecord)
handler.post(saveRegisterRecord)

export default handler;