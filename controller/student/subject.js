import con, { executeQuery } from "../../config/db"

const getAllSubject = async (req, res) => {
    try {
        let subjectData = await executeQuery("select * from subject");
        res.send(subjectData)
    }catch(err){
        res.status(500).json(err);
    }
};


const getSubjectBysubId = async (req, res) => {
    let id = req.query.sub_id
    try {

        let subjectData = await executeQuery(`select * from subject where sub_id=${req.query.sub_id}`, []);
        res.status(200).json(subjectData)

    } catch (err) {
        res.status(500).json(err)
    }
}

const saveSubject = async (req, res) => {
    console.log(req.body);
    let id = req.body.sub_id
    let name = req.body.sub_name;
    let credit = req.body.sub_credit;
    let des = req.body.sub_des;
     //ผิดตรง fist ต้องเป็น first
    try {
        let subjectData = await executeQuery(
            "insert into subject (sub_id, sub_name, sub_credit, sub_des) values(?,?,?,?)",
            [id, name, credit,des]);
            subjectData = await executeQuery(`select * from subject where sub_id=${id}`
            );
           
        res.status(201).json(subjectData)
    } catch (err) {
        res.status(400).json(err)
    }

}


const updateSubject = async(req,res) =>{
    let id=req.query.sub_id;
    const {sub_name, sub_credit,sub_des} = req.body;
    try{
        let subjectData = await executeQuery(`select * from subject where sub_id = ?`,
        [id]);
        console.log(subjectData.length);
        if(subjectData.length > 0){
            subjectData = await executeQuery(
                'update subject set sub_name=?, sub_credit=?, sub_des=? where sub_id=?',
            [sub_name, sub_credit,sub_des, id]);
            res.status(200).json(subjectData);
        }
        else{
            res.status(400).json(`student not found on this id=${id}`);
        }
    }catch(err){
        res.status(400).json(err);
    }
}


const deleteSubjectById = async (req, res) => {
    let id = req.query.sub_id;
    try {
        let subjectData = await executeQuery(
            "delete from subject where sub_id=?", [id]
        );
        res.status(200).json(subjectData);
    } catch (err) {
        res.status(500).json(err);
    }
};

export { getAllSubject, getSubjectBysubId, saveSubject, updateSubject, deleteSubjectById}