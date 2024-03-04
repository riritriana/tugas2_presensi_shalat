import {pool} from "../../db.js";
export async function getStudents(req,res){
      try {
      const result = await pool.query("SELECT * FROM students");
      res.json(result.rows);  
    } catch (error) {
      console.log(error)
    }
}
export async function addStudent(req,res){
      try {
      const result = await pool.query(
        "INSERT INTO students (name, generation) VALUES ($1, $2) RETURNING *",
        [req.body.name, req.body.generation]
      );
      res.json({
        student: result.rows[0],
        message: "Mahasiswa berhasil ditambahkan.",
      });  
    } catch (error) {
      console.log(error)
    }
}
export async function getStudentById(req,res){
      try {
      const result = await pool.query("SELECT * FROM students WHERE id = $1", [
        req.params.id,
      ]);
      res.json(result.rows[0]); 
    } catch (error) {
      console.log(error)
    }
}

export async function updateStudentById(req,res){
  try {
    await pool.query(
      "UPDATE students SET name = $1, generation = $2 WHERE id = $3",
      [req.body.name, req.body.generation, req.params.id]
    );
    res.send("Mahasiswa berhasil diedit."); 
  } catch (error) {
    console.log(error)
  }

}

export async function updatePresentById(req,res){
      try {
      await pool.query("UPDATE students SET present = $1 WHERE id = $2", [
        req.body.present,
        req.params.id,
      ]);
      res.json(req.body.present);  
    } catch (error) {
      console.log(error)
    }
}

export async function deleteStudentById(req,res){
      try {
      await pool.query("DELETE FROM students WHERE id = $1", [req.params.id]);
      res.send("Mahasiswa berhasil dihapus.");  
    } catch (error) {
      console.log(error)
    }

}
