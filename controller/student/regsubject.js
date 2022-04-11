import con, { executeQuery } from "../../config/db"


const getAllRegisterRecord = async (req, res) => {
    try {
        let RegisterRecordData = await executeQuery("select * from register_record");
        res.send(RegisterRecordData)
    }catch(err){
        res.status(500).json(err);
    }
};




const saveRegisterRecord = async (req, res) => {
    console.log(req.body);
    let rec_id = req.body.rec_id
    let stu_id = req.body.stu_id;
    let sub_id = req.body.sub_id;

    try {
        let RegisterRecordData = await executeQuery(
            "insert into register_record (stu_id, sub_id) values(?,?)",
            [stu_id, sub_id]);
            RegisterRecordData = await executeQuery(`select * from register_record where rec_id=${RegisterRecordData.insertId}`
            );
           
        res.status(201).json(RegisterRecordData)
    } catch (err) {
        res.status(400).json(err)
    }

}


const deleteRegisterRecordByrec_Id = async (req, res) => {
    let id = req.query.rec_id;
    try {
        let RegisterRecordData = await executeQuery(
            "delete from register_record where rec_id=?", [id]
        );
        res.status(200).json(RegisterRecordData);
    } catch (err) {
        res.status(500).json(err);
    }
};

export {getAllRegisterRecord, saveRegisterRecord, deleteRegisterRecordByrec_Id}