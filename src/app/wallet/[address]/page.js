'use client'
import Image from 'next/image'
import styles from '../../page.module.css'
import getTx from '../../_lib/getTx'

export default async function Address({ params }) {

    const address = params.address
    const nft = {
        interface: 'V1_NFT',
        id: '5tA8wYiwrNo94bchmusHWFUjCAJ38TpagNCLHFgUQ3bc',
        content: {
            '$schema': 'https://schema.metaplex.com/nft1.0.json',
            json_uri: 'https://shdw-drive.genesysgo.net/58ohwymyELzbAxMnF9L8AasNzA9Sx5fN45b45B69Mvh1/5121.json',
            files: [[Object]],
            metadata: {
                attributes: [Array],
                description: 'We are the Entreprenerdz eating glass & staring into the abyss',
                name: 'Entreprenerdz #5121',
                symbol: 'NERDZ',
                token_standard: 'NonFungible'
            },
            links: {
                external_url: 'https://linktr.ee/gigadao',
                image: 'https://shdw-drive.genesysgo.net/58ohwymyELzbAxMnF9L8AasNzA9Sx5fN45b45B69Mvh1/5121.jpg'
            }
        },
        authorities: [
            {
                address: 'D2VNiG9RWVpeLCgQbWM5AKgFcuRtp2gnXjenKCeCFx5u',
                scopes: [Array]
            }
        ],
        compression: {
            eligible: false,
            compressed: false,
            data_hash: '',
            creator_hash: '',
            asset_hash: '',
            tree: '',
            seq: 0,
            leaf_id: 0
        },
        grouping: [
            {
                group_key: 'collection',
                group_value: '6wx1Qe8Cb4dfgkucA7NdB6THQAdn3usNg35gFYPKkdJd',
                verified: true,
                collection_metadata: [Object]
            }
        ],
        royalty: {
            royalty_model: 'creators',
            target: null,
            percent: 0,
            basis_points: 0,
            primary_sale_happened: true,
            locked: false
        },
        creators: [
            {
                address: 'Cdo2dGRZ9avv2n397X2R1yy41mn32PpjqfpJAfawsVCD',
                share: 0,
                verified: true
            },
            {
                address: 'D2VNiG9RWVpeLCgQbWM5AKgFcuRtp2gnXjenKCeCFx5u',
                share: 100,
                verified: false
            }
        ],
        ownership: {
            frozen: false,
            delegated: false,
            delegate: null,
            ownership_model: 'single',
            owner: 'GaxVqiQyJKQDRu6H4pfy9V6Xq19pHGr6HQKDQDv911Y4'
        },
        supply: { print_max_supply: 0, print_current_supply: 0, edition_nonce: 254 },
        mutable: true,
        burnt: false
    }
    const data = await getTx(address)
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
                <h2>
                    NEXT GEN
                </h2>
                <h1>
                    SOLANA EXPLORER
                </h1>
            </div>

            <div className={styles.grid}>
                <a>Wallet Address: {address}</a>
                <a>Total Items: {data.result.grand_total}
                    <a>Balance: {data.balance}</a>
                    {data.result.items.map((item) => {
                        JSON.stringify(item)
                    })}
                    {/* <Image src={data.content.links.image} width={100} height={100} /> */}
                </a>
            </div>
        </main>
    )
}
