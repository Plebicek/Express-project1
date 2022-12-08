const express = require("express");
const router = express.Router();
const members = require("../../Members");
const id = require("uuid");

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
  const newMember = {
    id: id.v4(),
    name: req.body.name,
    email: req.body.email,
    active: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: `please include a name and email!` });
  }

  members.push(newMember);
  res.json(members);
});

router.put("/:id", (req, res) => {
  const found = members.some((member) => {
    if (member.id == parseInt(req.params.id)) {
      return member;
    }
  });
  if (found) {
    const updateMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updateMember.name ? updateMember.name : member.name;
        member.email = updateMember.email ? updateMember.email : member.email;

        res.json({ msg: "Member updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with id ${req.params.id}` });
  }
});

module.exports = router;
