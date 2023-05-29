import { Service } from 'typedi';
import { HttpException, RESPONSE_STATUS } from '@exceptions/httpException';
import { LinkModel } from '@/models/link.model';
import { ILink, LINK_STATUS } from '@/interfaces/link.interface';
import { LinkFilterDTO } from '@/dtos/links.dto';
import { PaginationDTO } from '@/dtos/pagination.dto';

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
  public async findALlLinksByFilter(filter: LinkFilterDTO & PaginationDTO): Promise<ILink[]> {
    const query = {
      $or: [{ name: { $regex: filter.name, $options: 'i' } }, { tags: { $in: filter.tags } }, { description: filter.description }],
    };
    const linksList: ILink[] = await LinkModel.find(query).limit(filter.limit);
    if (!(linksList.length > 0)) throw new HttpException(RESPONSE_STATUS.NotFound, 'No result  found');

    return linksList;
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

  public async updateLink(linkId: string, linkData: ILink): Promise<ILink> {
    const updateUserById: ILink = await LinkModel.findByIdAndUpdate(linkId, linkData, { new: true });
    if (!updateUserById) throw new HttpException(RESPONSE_STATUS.NotFound, "Link doesn't exist");

    return updateUserById;
  }

  public async deleteLink(linkId: string): Promise<ILink> {
    const deleteLinkById: ILink = await LinkModel.findByIdAndDelete(linkId);
    if (!deleteLinkById) throw new HttpException(RESPONSE_STATUS.DoesNotExist, "Link doesn't exist");

    return deleteLinkById;
  }
}
