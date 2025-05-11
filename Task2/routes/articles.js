const express = require('express');
const dbSingleton = require('../dbSingleton');
const router = express.Router();
const db= dbSingleton.getConnection();
// adding new article
router.post('/', (req,res)=> {
  const {title, content, author}=req.body;
  const query= 'INSERT INTO articles (title, content, author) VALUES (?, ?, ?) ';
  db.query(query,[title, content, author],(err,res)=>{
    if(err){
      res.status(505).send(err);
      return
    }
    res.json({message: 'Article added!', id: results.insertId});
  })
})
// getting list of articles
//SELECT * FROM articles;
router.get('/' , (req,res)=> {
  const query= 'SELECT * FROM articles';
  db.query(query,(err,results) =>{
    if(err){
      res.status(505).send(err);
      return
    }
    res.json(results)
  })
})
//SELECT * FROM articles WHERE id = 1;
// קבלת מידע על מאמר לפי מזהה
router.put('/:id' ,(req,res) => {
  const{id}=req.params;
  const query= 'SELECT * FROM articles WHERE id = ?';
  db.query(query,[id],(err,results)=>{
    if(err){
      res.status(505).send(err);
      return
    }
    res.json(results)
  })
})
//DELETE FROM articles WHERE id = 1;
router.delete('/:id' , (req,res) =>{
  const{id}=req.params;
  const query= 'DELETE FROM articles WHERE id = ?';
  db.query(query,[id],(err,results) => {
    if(err){
      res.status(505).send(err);
      return;
    }
    res.json({message:'Article Deleted'})
  })
});
//SELECT * FROM articles WHERE author = 'Ben';
router.get('/:author', (req, res) => {
  const { name } = req.params;
  const query = 'SELECT * FROM articles WHERE author = ?';
  db.query(query, [name], (err, results) => {
    if (err) {
      res.status(505).send(err);
      return;
    }
    res.json(results);
  });
});
//SELECT * FROM articles WHERE created_at > '2024-01-01 00:00:00';
router.get('/articles', (req, res) => {
  const { after } = req.query;
  if (!after || isNaN(Date.parse(after))) {
    return res.status(400).json({ error: 'Invalid or missing "after" date' });
  }
  const query = 'SELECT * FROM articles WHERE created_at > ?';
  db.query(query, [after], (err, results) => {
    if (err) {
      res.status(505).send(err);
      return;
    }
    res.json(results);
  });
});
//SELECT * FROM articles ORDER BY created_at DESC;
router.get('/articles/sorted', (req, res) => {
  const query = 'SELECT * FROM articles ORDER BY created_at DESC';

  db.query(query, (err, results) => {
    if (err) {
      res.status(505).send(err);
      return;
    }
    res.json(results);
  });
});

//SELECT COUNT(*) FROM articles;
router.get('/count', (req, res) => {
  const query = 'SELECT COUNT(*) as count FROM articles';
  db.query(query, (err, results) => {
    if (err) {
      res.status(505).send(err);
      return;
    }
    res.json(results[0]);
  });
});
//SELECT * FROM articles WHERE title LIKE '%kuku%';
router.get('/search/:keyword', (req, res) => {
  const keyword = req.params.keyword;
  const pattern = '%' + keyword + '%';
  const query = 'SELECT * FROM articles WHERE title LIKE ?';
  db.query(query, [pattern], (err, results) => {
    if (err) {
      res.status(505).send(err);
      return;
    }
    res.json(results);
  });
});
//SELECT DISTINCT author FROM articles;
router.get("/distinct", (req, res) => {
  const query = "SELECT DISTINCT author FROM articles";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);  
    }
  });
    res.json(results);
  });


module.exports = router; 