import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { HttpException, RESPONSE_STATUS } from '@exceptions/httpException';
import { IUser } from '@interfaces/users.interface';
import { UserModel } from '@models/users.model';
import { LinkModel } from '@/models/link.model';
import { ILink, LINK_STATUS } from '@/interfaces/link.interface';

@Service()
export class LinkService {
  public async findALlLinks(): Promise<ILink[]> {
    const links: ILink[] = await LinkModel.find();
    return links;
  }

  public async findLinkById(linkId: string): Promise<ILink> {
    const findLink: ILink = await LinkModel.findOne({ _id: linkId });
    if (!findLink) throw new HttpException(409, "ILink doesn't exist");

    return findLink;
  }

  public async createLink(linkData: ILink): Promise<ILink> {
    const findLink: ILink = await LinkModel.findOne({ url: linkData.url });
    if (findLink) {
      if (findLink.status === LINK_STATUS.INREVIEW)
        throw new HttpException(RESPONSE_STATUS.NotAcceptable, `This URL under ${linkData.name} name is under review.`);
      if (findLink.status === LINK_STATUS.INQUEUE)
        throw new HttpException(RESPONSE_STATUS.NotAcceptable, `This URL under ${linkData.name} name is in queue.`);
      if (findLink.status === LINK_STATUS.REJECTED)
        throw new HttpException(RESPONSE_STATUS.NotAcceptable, `This URL under ${linkData.name} name has been rejected.`);
      // if (findLink.status === LINK_STATUS.APPROVED)
      // should call payment service here to extending the subsicrption

      // throw new HttpException(409, `This URL ${linkData.url} already exists`);
    }

    const createdLink: ILink = await LinkModel.create(linkData);

    return createdLink;
  }

  public async updateUser(userId: string, userData: IUser): Promise<IUser> {
    if (userData.email) {
      const findUser: IUser = await UserModel.findOne({ email: userData.email });
      if (findUser && findUser._id != userId) throw new HttpException(409, `This email ${userData.email} already exists`);
    }

    if (userData.password) {
      const hashedPassword = await hash(userData.password, 10);
      userData = { ...userData, password: hashedPassword };
    }

    const updateUserById: IUser = await UserModel.findByIdAndUpdate(userId, { userData });
    if (!updateUserById) throw new HttpException(409, "IUser doesn't exist");

    return updateUserById;
  }

  public async deleteUser(userId: string): Promise<IUser> {
    const deleteUserById: IUser = await UserModel.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "IUser doesn't exist");

    return deleteUserById;
  }
}
