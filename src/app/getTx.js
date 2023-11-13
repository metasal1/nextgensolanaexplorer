export default async function getTx(address) {

    const LAMPORTS_PER_SOL = 1_000_000_000
    const options = {
        method: 'POST',
        body: JSON.stringify({
            "jsonrpc": "2.0",
            "id": "string",
            "method": "getAssetsByOwner",
            "params": {
                "ownerAddress": address,
                // "ownerAddress": "GaxVqiQyJKQDRu6H4pfy9V6Xq19pHGr6HQKDQDv911Y4",
                "page": 1,
                "limit": 100,
                "sortBy": {
                    "sortBy": "created",
                    "sortDirection": "asc"
                },
                "displayOptions": {
                    "showUnverifiedCollections": true,
                    "showCollectionMetadata": true,
                    "showGrandTotal": true
                }
            }
        })
    }
    const request = await fetch('https://dear-brinna-fast-mainnet.helius-rpc.com/', options)
    const data = await request.json()
    const request2 = await fetch(`https://api.helius.xyz/v0/addresses/${address}/balances?api-key=85b1b62b-6788-41cd-8979-13152d8ebf4c`)
    const balance = await request2.json()
    data.balance = balance.nativeBalance / LAMPORTS_PER_SOL
    return data
}
