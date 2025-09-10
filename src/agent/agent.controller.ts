import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgentService } from './agent.service';
import { PrismaClient, Prisma } from '@prisma/client';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post()
  create(@Body() createAgentDto: Prisma.AgentCreateInput) {
    return this.agentService.create(createAgentDto);
  }

  @Get()
  findAll() {
    return this.agentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgentDto: Prisma.AgentUpdateInput) {
    return this.agentService.update(+id, updateAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agentService.remove(+id);
  }
}
