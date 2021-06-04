import { Router, Request, Response} from 'express'
import * as controller from './controller';

const router = Router();

router.get("/", (req: Request, res:Response) => {
  res.send("hola");
});

router.get("/getposts", controller.getPosts);
router.post("/createpost", controller.createPost);

export default router;
