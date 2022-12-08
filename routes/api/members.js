const express = require("express");
const router = express.Router();
const members = require("../../Members");

/* api  */
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(
      members.filter((member) => {
        return member.id === parseInt(req.params.id);
      })
    );
  } else {
    res.status(400).json({ msg: `No member with id ${req.params.id}` });
  }
});

/* api */
router.get("/", (req, res) => res.json(members));

router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
