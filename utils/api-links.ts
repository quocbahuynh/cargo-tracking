const MAERSK_URL = process.env.NEXT_PUBLIC_API_MAERSK;
const COSCO_URL = process.env.NEXT_PUBLIC_API_COSCO;
const MSC_URL = process.env.NEXT_PUBLIC_API_MSC;
const apiLinks = {
    companies: {
        maersk: {
            officialUrl: MAERSK_URL,
            api: "/api/maersk/"
        },
        cosco: {
            officialUrl: COSCO_URL,
            api: "/api/cosco/"
        },
        msc: {
            officialUrl: MSC_URL,
            api: "/api/msc/"
        }
    }
}

export default apiLinks
