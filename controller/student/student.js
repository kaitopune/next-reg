import con, { executeQuery } from "../../config/db"

const getAllStudent = async (req, res) => {
    try {
        let studentData = await executeQuery("select * from student");
        res.send(studentData)

    }catch(err){
        res.status(500).json(err);
    }
};


const getAllStudentById = async (req, res) => {
    let id = req.query.id
    try {

        let studentData = await executeQuery(`select * from student where stu_id=${id}`, []);
        res.status(200).json(studentData)

    } catch (err) {
        res.status(500).json(err)
    }
}

const getSubjectById = async (req, res) => {
    let id = req.query.id
    try {
        
        let studentData = await executeQuery(`SELECT student.stu_id, student.stu_first, student.stu_last, subject.sub_name, subject.sub_credit 
        from data.student 
        inner join data.register_record 
        on register_record.stu_id = student.stu_id 
        inner join data.subject 
        on subject.sub_id =  register_record.sub_id 
        where student.stu_id=${id}`, []);
        res.status(200).json(studentData)

    } catch (err) {
        res.status(500).json(err)
    }
}


const saveStudent = async (req, res) => {
    console.log(req.body);
    let stu_id = req.body.stu_id
    let stu_first = req.body.stu_first;
    let stu_last = req.body.stu_last;
    
    try {
        let studentData = await executeQuery(
            "insert into student (stu_id, stu_first, stu_last) values(?,?,?)",
            [stu_id, stu_first, stu_last]);
            studentData = await executeQuery(`select * from student where stu_id=${stu_id}`
            );
           
        res.status(201).json(studentData)
    } catch (err) {
        res.status(400).json(err)
    }

}

const updateStudent = async(req,res) =>{
    let id=req.query.id;
    const {stu_first, stu_last} = req.body;
    try{
        let studentData = await executeQuery(`select * from student where stu_id = ?`,
        [id]);
        console.log(studentData.length);
        if(studentData.length > 0){
            studentData = await executeQuery(
                'update student set stu_first=?, stu_last=? where stu_id=?',
            [stu_first, stu_last, id]);
            res.status(200).json(studentData);
        }
        else{
            res.status(400).json(`student not found on this id=${id}`);
        }
    }catch(err){
        res.status(400).json(err);
    }
}

const deleteStudentById = async (req, res) => {
    let id = req.query.id;
    try {
        let studentData = await executeQuery(
            "delete from student where stu_id=?", [id]
        );
        res.status(200).json(studentData);
    } catch (err) {
        res.status(500).json(err);
    }
};

export{ getAllStudent, getAllStudentById, getSubjectById, saveStudent, updateStudent, deleteStudentById}