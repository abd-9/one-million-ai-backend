import { Router } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { LinkController } from '@/controllers/links.controller';

export class LinkRoute implements Routes {
  public path = '/links';
  public router = Router();
  public link = new LinkController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}`, this.user.getUsers);
    // this.router.get(`${this.path}/:id`, this.user.getUserById);

    this.router.post(`${this.path}`, ValidationMiddleware(CreateUserDto), this.link.createLink);
    // this.router.put(`${this.path}/:id`, ValidationMiddleware(CreateUserDto, true), this.user.updateUser);
    // this.router.delete(`${this.path}/:id`, this.user.deleteUser);
  }
}
