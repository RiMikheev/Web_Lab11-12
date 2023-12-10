const { Router } = require('express')
const Users = require('../models/users')
const router = Router()

router.get('/', async (req, res) => {
  const users = await Users.find({})

  res.render('index', {
    users
  })
})

router.get('/create', (req, res) => {
  res.render('create')
})

router.post('/create', async (req, res) => {
  console.log(req.body)
  const user = new Users({
    name: req.body.name,
    email: req.body.email
  })

  await user.save()
  res.redirect('/')
})

router.post('/delete', async (req, res) => {
  console.log(req.body.id)
  Users.findByIdAndRemove(req.body.id, (err, doc) => {
    if (!err) {
      res.redirect('/')
    } else {
      console.log('Failed to Delete user Details: ' + err)
    }
  })
})

module.exports = router
