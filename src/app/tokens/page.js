import styles from '../page.module.css'
import api from 'api'
import Image from 'next/image';

export default async function Token() {

    const sdk = api('@birdeyedotso/v1.0#119cuw2tlovsop2k');
    sdk.auth('4f602a633f114f199b41149069666b6a');
    const data = await sdk.getPublicTokenlist()

    const total = data.data.data.total;
    const tokens = data.data.data.tokens;
    const time = data.data.data.updateTime;

    console.log(total)
    console.log(tokens[0])
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
            <div>
                Total Tokens: {total} / Updated: {time}
            </div>
            <div className={styles.grid}>
                {tokens.map(token => {

                    return (
                        <div>
                            {/* <Image src={token.logoURI} width={50} height={50} /> */}
                            <div>Name: {token.name}</div>
                            <div><img src={token.logoURI} width={25} height={25} /></div>
                            {/* <div>{token.logoURI}</div> */}
                            <div>Symbol: {token.symbol}</div>
                            <div>Market Cap: {token.mc}</div>
                            <small>Address: {token.address}</small>
                        </div>

                    )
                })}
            </div>
        </main>
    )
}
