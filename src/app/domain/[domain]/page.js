'use client'
import styles from '../../page.module.css'
import { getDomainKey, NameRegistryState } from "@bonfida/spl-name-service";
import { Connection, clusterApiUrl } from '@solana/web3.js';
import Link from 'next/link';

export default async function Address({ params }) {

    const connection = new Connection(clusterApiUrl('mainnet-beta'))
    const domain = params.domain
    let registry, nftOwner;

    if (domain) {
        const { pubkey } = await getDomainKey(domain);
        ({ registry, nftOwner } = await NameRegistryState.retrieve(connection, pubkey));
        console.log('registry', registry)
        console.log('nftOwner', nftOwner)
    }

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Work in Progress!
                </p>
                <div>
                    <a
                        href="https://milysec.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By Milysec
                    </a>
                </div>
            </div>

            <div className={styles.center}>
                <h1>
                    NEXT GEN SOLANA EXPLORER
                </h1>
            </div>

            <div className={styles.grid}>
                <div>
                    <a>Domain Address: {domain}</a>
                </div>
                <a>Owner: <Link href={`/wallet/${registry.owner.toBase58()}`}>{registry.owner.toBase58()}</Link></a>

            </div>
        </main>
    )
}
