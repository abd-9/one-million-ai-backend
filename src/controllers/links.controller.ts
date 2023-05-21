import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { ILink, LINK_STATUS } from '@/interfaces/link.interface';
import { LinkService } from '@/services/links.service';
import { RESPONSE_STATUS } from '@/exceptions/httpException';

export class LinkController {
  public link = Container.get(LinkService);

  // public getUsers = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const findAllUsersData: IUser[] = await this.user.findAllUser();

  //     res.status(200).json({ data: findAllUsersData, message: 'findAll' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public getUserById = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const findOneUserData: IUser = await this.user.findUserById(userId);

  //     res.status(200).json({ data: findOneUserData, message: 'findOne' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  public createLink = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const linkData: ILink = req.body;
      linkData.status = LINK_STATUS.INQUEUE;
      const createLinkData: ILink = await this.link.createLink(linkData);

      res.status(RESPONSE_STATUS.OK).json({ data: createLinkData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  // public updateUser = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const userData: IUser = req.body;
  //     const updateUserData: IUser = await this.user.updateUser(userId, userData);

  //     res.status(200).json({ data: updateUserData, message: 'updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userId: string = req.params.id;
  //     const deleteUserData: IUser = await this.user.deleteUser(userId);

  //     res.status(200).json({ data: deleteUserData, message: 'deleted' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}
