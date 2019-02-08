const Candy = require('../db/models/Candy')
const router = require('express').Router()

module.exports = router


router.get('/', async (req, res, next) => {
  try {
    console.log('hit')
    const allCandies = await Candy.findAll()
    res.json(allCandies)
  } catch (err) { next(err) }
})
