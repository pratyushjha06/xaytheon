const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { verifyAccessToken, generalRateLimiter } = require("../middleware/auth.middleware");
const authorize = require("../middleware/rbacMiddleware");
const { PERMISSIONS } = require("../config/roles");

router.use(generalRateLimiter);

router.get(
  "/history",
  verifyAccessToken,
  authorize(PERMISSIONS.VIEW_HISTORY),
  userController.getHistory
);

router.post(
  "/history",
  verifyAccessToken,
  authorize(PERMISSIONS.UPDATE_HISTORY),
  userController.updateHistory
);

module.exports = router;

