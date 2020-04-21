const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT "events".id, "event_name", "events".organizations_id, "org_name", "events".contacts_id, "contact_name", "date", "start_time", "end_time", "books_in", "books_out", "number_of_children", "location", "volunteers", "events".notes FROM "events"
                      JOIN "organizations" on "events".organizations_id = "organizations".id
                      JOIN "contacts" on "events".contacts_id = "contacts".id;`
    console.log('in events router.get', req.body)
    pool.query(queryText)
        .then(result => {
            console.log('result.rows:', result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in events GET', error)
            res.sendStatus(500);
        })
})

// add new event
router.post('/', (req, res) => {
    console.log(req.body)
    const queryText =
      `INSERT INTO "events" ("event_name", "organizations_id", "contacts_id", "location", "date", "start_time", "end_time", "volunteers", "books_in", "books_out", "number_of_children", "number_of_adult_esl_learners", "notes")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`
  
    pool.query(queryText,
      [req.body.event_name, req.body.organizations_id, req.body.contacts_id, req.body.location, req.body.date, req.body.start_time, req.body.end_time, req.body.volunteers, req.body.collectBooks, req.body.distBooks, req.body.numOfKids, req.body.numEslAdults, req.body.notes])
      .then(result => {
        console.log(result.rows)
        res.send(result.rows)
      }).catch(error => {
        console.log('error in event POST', error)
        res.sendStatus(500);
      })
  })

// edit existing event
router.put('/editEvent', (req, res) => {
  console.log('in editEvent, req.body:', req.body)
  const queryText = `UPDATE "events"
                    SET "event_name" = $1, "organizations_id" = $2, "contacts_id" = $3, "date" = $4, "start_time" = $5, "end_time" = $6, "books_in" = $7, "books_out" = $8, "number_of_children" = $9, "location" = $10, "volunteers" = $11, "notes" = $12
                    WHERE "id" = ${req.body.id}`
  pool.query(queryText, [req.body.event_name, req.body.organizations_id, req.body.contacts_id, req.body.date, req.body.start_time, req.body.end_time, Number(req.body.books_in), Number(req.body.books_out), Number(req.body.number_of_children), req.body.location, req.body.volunteers, req.body.notes])
    .then(result => {
      console.log(result.rows)
      res.sendStatus(200)
    }).catch(error => {
      console.log('error in events put:', error)
      res.sendStatus(500)
    })

})

module.exports = router;