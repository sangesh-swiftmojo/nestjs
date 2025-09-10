import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
export declare class AgentService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createAgentDto: Prisma.AgentCreateInput): Prisma.Prisma__AgentClient<{
        id: number;
        email: string;
        name: string | null;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        email: string;
        name: string | null;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Prisma.Prisma__AgentClient<{
        id: number;
        email: string;
        name: string | null;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    update(id: number, updateAgentDto: Prisma.AgentUpdateInput): Prisma.Prisma__AgentClient<{
        id: number;
        email: string;
        name: string | null;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    remove(id: number): Prisma.Prisma__AgentClient<{
        id: number;
        email: string;
        name: string | null;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
}
