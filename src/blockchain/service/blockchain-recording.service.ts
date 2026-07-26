/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

@Injectable()
export class BlockchainRecordingService {
  private readonly logger = new Logger(BlockchainRecordingService.name);

  constructor(private readonly queue: Queue) {}

  async recordTransaction(transactionId: string) {
    await this.queue.add(
      'record-blockchain-transaction',
      {
        transactionId,
      },
      {
        attempts: 5,

        backoff: {
          type: 'exponential',
          delay: 5000,
        },
      },
    );
  }
}
