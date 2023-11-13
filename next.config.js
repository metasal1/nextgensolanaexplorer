/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'shdw-drive.genesysgo.net' },
            { protocol: 'https', hostname: 'img.fotofolio.xyz' },
            { protocol: 'https', hostname: 'logo1.birdeye.so' },
        ]
    }
}

module.exports = nextConfig
