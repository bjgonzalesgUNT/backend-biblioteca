import { Injectable, Inject } from '@nestjs/common';
import { PUBLISHER_REPOSITORY } from '@/core/constants';
import { Publisher } from '../publisher/entities/publisher.entity';
import { CreatePublisherDto } from '../publisher/dto/create-publisher.dto';
import { UpdatePublisherDto } from '../publisher/dto/update-publisher.dto';

@Injectable()
export class PublishersService {
  constructor(
    @Inject(PUBLISHER_REPOSITORY)
    private readonly publisherRepository: typeof Publisher,
  ) {}

  async create(createPublisherDto: CreatePublisherDto): Promise<Publisher> {
    return this.publisherRepository.create<Publisher>(createPublisherDto);
  }

  async findAll(): Promise<Publisher[]> {
    return this.publisherRepository.findAll<Publisher>();
  }

  async findOne(id: number): Promise<Publisher> {
    return this.publisherRepository.findOne<Publisher>({
      where: { id },
    });
  }

  async update(id: number, updatePublisherDto: UpdatePublisherDto): Promise<[number]> {
    return this.publisherRepository.update<Publisher>(updatePublisherDto, {
      where: { id },
    });
  }  

  async remove(id: number): Promise<void> {
    const publisher = await this.findOne(id);
    if (publisher) {
      await publisher.destroy();
    }
  }
}