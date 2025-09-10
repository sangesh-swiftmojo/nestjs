import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AgentService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createAgentDto: Prisma.AgentCreateInput) {
    return this.databaseService.agent.create({
      data: createAgentDto,
    });
  }

  findAll() {
    return this.databaseService.agent.findMany();
  }

  findOne(id: number) {
    return this.databaseService.agent.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAgentDto: Prisma.AgentUpdateInput) {
    return this.databaseService.agent.update({
      where: { id },
      data: updateAgentDto,
    });
  }

  remove(id: number) {
    return this.databaseService.agent.delete({
      where: { id },
    });
  }
}
