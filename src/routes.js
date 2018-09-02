const express = require('express');

const router = express.Router();

const SplitTest = config => (req, res, next) => {
  console.log('CONFIG', config);
  return next();
};

router.get(
  '/',
  SplitTest({
    candidates: ['pages/home/index', 'pages/home/index-candidate']
  }),
  (req, res) => {
    res.render('pages/home/index');
  }
);

module.exports = router;
