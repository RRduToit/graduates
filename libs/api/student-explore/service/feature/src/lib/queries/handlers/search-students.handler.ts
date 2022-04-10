import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';
import { SearchStudentsQuery } from '../impl/search-students.query';

@QueryHandler(SearchStudentsQuery)
export class SearchStudentsHandler implements IQueryHandler<SearchStudentsQuery> {
  constructor(private readonly repository: StudentExploreRepository) {}

  async execute(query: SearchStudentsQuery) {
	const {email} = query;
    //return this.repository.findOne(email);
  }
  
}