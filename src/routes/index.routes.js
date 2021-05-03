const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("GET request at /hello route");
  return res.json("Hello world!");
});

module.exports = router;