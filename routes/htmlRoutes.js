const path = require('path');
const router = require('express').Router()


  router.get('/notes', (req, res) => {
   return res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  router.get('*', function(req, res) {
   return res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  module.exports = router
