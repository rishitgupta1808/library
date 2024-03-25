import { getRepository } from "typeorm";
import { Author } from "../../entity/author";

export class AuthorService extends Author {
  addAuthorService = async (paload: Author) => {
    return (
      (await getRepository(Author).findOne({
        where: { author_name: paload.author_name },
      })) ?? (await getRepository(Author).save(paload))
    );
  };
}
