class Miner {
    constructor(blockchain, transactionPool, wallet, p2pServer) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    mine() {
        const validTransactions = this.transactionPool.validTransactions();
        //TODO: include a reward for the miner
        //TODO: create a block consisting of a valid transactions
        // Sync the chains in the peer to peer server 
        // Clear the transaction pool
        // Broadcast to every miner to clear their transaction pools
    }
}

module.exports = Miners;