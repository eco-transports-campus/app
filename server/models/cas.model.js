import ConnectCas from 'connect-cas2';
import serverConfig from '../config';

//Cas model
const cas = {
  casClient : new ConnectCas({
    debug: false, // remove in production
    ignore: [   // path where no auth is required
        /\/$/
    ],
    match: [],
    servicePrefix: 'http://localhost:'+ serverConfig.port + '/cas', // our site URL
    serverPath: 'https://sso.u-psud.fr',    // U-PSUD CAS base URL
    paths: {                                // U-PSUD CAS paths
        validate: '/cas/validate',
        serviceValidate: '/cas/serviceValidate',
        proxy: '/cas/proxy',
        login: '/cas/login',
        logout: '/cas/logout',
        proxyCallback: ''
    },
    redirect: false,
    gateway: false,
    renew: false,
    slo: true,
    cache: {
        enable: false,
        ttl: 5 * 60 * 1000,
        filter: []
    },
    fromAjax: {
        header: 'x-client-ajax',
        status: 418
    }
}),
};

export default cas;