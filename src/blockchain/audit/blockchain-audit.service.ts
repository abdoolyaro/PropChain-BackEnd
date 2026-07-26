/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

@Injectable()
export class BlockchainAuditService {
  constructor(
    private readonly validator: BlockchainAuditValidator,

    @InjectRepository(BlockchainAuditEntity)
    private readonly repository: Repository<BlockchainAuditEntity>,
  ) {}

  async create(payload: unknown) {
    const validated = await this.validator.validateRecord(payload);

    return this.repository.save(this.repository.create(validated));
  }
}
