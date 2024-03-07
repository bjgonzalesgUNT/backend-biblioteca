import { PaginationDto } from './../../../src/core/dto/pagination.dto';

describe('pagination.dto', () => {
  it('should called with the correct parameters', () => {
    const paginationDtoTest = new PaginationDto();

    expect(paginationDtoTest).toHaveBeenCalledWith({
      limit: 10,
      offset: 0,
    });
  });
});
