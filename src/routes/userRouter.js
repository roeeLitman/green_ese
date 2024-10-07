const router = require("express").Router();
// const {  } = require('../controllers/greenEysController')
const {
  register,
  setSettings,
  getProfile,
} = require("../controllers/userController");
const { onlySoldiersAndCommanders } = require("../middlewares/authmiddeleware");

router.post("/register", register);

router.get("/profile", onlySoldiersAndCommanders, getProfile);

router.get("/settings", onlySoldiersAndCommanders, setSettings);

module.exports = router;
