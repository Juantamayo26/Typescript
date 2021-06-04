import Schema from './schema';
import { RequestHandler, Request, Response } from 'express';

export const getPosts: RequestHandler = async (req: Request, res: Response) => {
  try {
    const data: {} = await Schema.find();
    return res.json(data);
  }catch(err){
    res.json(err);
  }
};

export const createPost: RequestHandler = async (req: Request, res: Response) => {
  const idFound = await Schema.findOne({
    id: req.body.id.toLowerCase(),
  });
  if(idFound){
    return res.status(400).json({message: "El id ya existe"});
  }
  const post = new Schema(req.body);
  const savepost = await post.save();
  res.json(savepost);
};

