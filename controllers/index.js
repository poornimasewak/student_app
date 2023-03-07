const router = require('express').Router();
const Student = require('../models/student');

router.get('/', async (req, res) => {
    try {
        const stuList = await Student.findAll();
        const students = stuList.map(stu => stu.get({ plain: true }))
        res.render('allstudents', { students })

    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/api/add-student', (req, res) => {
    console.log(req.body);
    Student.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
});

router.delete('/api/student/:id', (req, res) => {
    Student.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
});

module.exports = router;