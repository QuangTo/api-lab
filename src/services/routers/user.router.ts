import {Router} from 'express'

const router = Router()

router.get("/:id", (req, res) => {
  res.json({
    id: req.params.id,
    name: "James QA",
    role: "tester"
  });
});

export default router;