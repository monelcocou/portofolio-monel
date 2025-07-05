/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://monelcocou.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    changefreq: 'weekly',
    priority: 0.7,

    transform: async (config, path) => {
        // Priorités SEO par page
        const priorities = {
            '/': 1.0,
            '/propos': 0.9,
            '/realisations': 0.9,
            '/services': 0.8,
            '/contact': 0.7,
        };

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: priorities[path] || config.priority,
            lastmod: new Date().toISOString(),
        };
    },

    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};