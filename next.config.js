/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputFileTracingIncludes: {
      '/api/**/*': ['./data/**/*'],
    },
  },
  async redirects() {
    return [
      {
        source: '/hizmetler',
        destination: '/hizmetler/web-tasarim',
        permanent: true,
      },
      {
        source: '/ariza-takip',
        destination: '/hizmetler/teknik-servis',
        permanent: true,
      },
      {
        source: '/kvkk',
        destination: '/yasal/kvkk',
        permanent: true,
      },
      {
        source: '/gizlilik',
        destination: '/yasal/gizlilik',
        permanent: true,
      },
      {
        source: '/gizlilik-politikasi',
        destination: '/yasal/gizlilik',
        permanent: true,
      },
      {
        source: '/kullanim-sartlari',
        destination: '/yasal/kullanim-sartlari',
        permanent: true,
      },
      {
        source: '/cerez-politikasi',
        destination: '/yasal/cerez-politikasi',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
