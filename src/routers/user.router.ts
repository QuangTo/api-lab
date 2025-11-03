import { Router } from "express";
import { UserService } from "../services/user.service";
import { InMemoryUserRepository } from "../repositories/inMemoryUser.repo";

const router = Router();
const userService = new UserService(new InMemoryUserRepository());

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = await userService.getUserById(id);

  return res.json(user);
});

export default router;
