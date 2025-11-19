import db from "../db/db.js";

export const handleFile = (req, res) => {
  const file = req.file;
  const q = `update user set profile_image = ? where id= ?`;
  const imagePath = `/images/${file.filename}`;
  db.query(q, [imagePath, 12], (err, result) => {
    if (err) return res.send(err);
    return res.send(result);
  });
};
