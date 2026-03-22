import { Injectable, OnModuleDestroy, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    const rawUrl = process.env.DATABASE_URL;
    if (!rawUrl) {
      throw new Error('DATABASE_URL is not set');
    }

    const url = new URL(rawUrl);
    const schema = url.searchParams.get('schema') ?? 'public';

    // 给 raw queries 补 search_path
    const options = url.searchParams.get('options');
    if (!options) {
      url.searchParams.set('options', `--search_path=${schema}`);
    }

    const connectionString = url.toString();
    const adapter = new PrismaPg({ connectionString }, { schema });

    super({
      adapter,
      log: ['error', 'warn'],
    });
  }

  async onModuleInit() {
    await this.$connect();

    const result = await this.$queryRawUnsafe(
      `select current_database() as db, current_schema() as schema`
    );
    this.logger.log(`Prisma runtime info: ${JSON.stringify(result)}`);
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}