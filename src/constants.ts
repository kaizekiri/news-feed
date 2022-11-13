export const RSS_URL_NRK = 'https://www.nrk.no/nyheter/siste.rss';
export const RSS_URL_FINANS = 'https://ws.finansavisen.no/api/articles.rss';
export const RSS_URL_TV2 =
    'https://www.tv2.no/rest/cms-feeds-dw-rest/v2/cms/article/nyheter';

export const RSS_URL_CNBC = 'https://www.cnbc.com/id/100727362/device/rss/rss.html';
export const RSS_URL_NYT =
    'https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/world/rss.xml';

export const OPTIONS = {
    RSS_URL_NRK: 'RSS_URL_NRK',
    RSS_URL_TV2: 'RSS_URL_TV2',
    RSS_URL_CNBC: 'RSS_URL_CNBC',
    RSS_URL_NYT: 'RSS_URL_NYT',
};

export const config = [{
    id: 'NRK',
    url: RSS_URL_NRK,
    logo: '../assets/nrk-logo.png',
    iconColor: '#00b9f2'
}];