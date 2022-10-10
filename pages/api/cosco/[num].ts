import type { NextApiRequest, NextApiResponse } from 'next'
import { apiLinks, httpClient } from '../../../utils'

// type Data = {
//     name: string
// }

const requestCosco = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { num } = req.query;

    const requestData = {
        url: `${apiLinks.companies.cosco.officialUrl}${num}`,
    }

    try {
        const getAPI = await httpClient.get(requestData)
        const { containers } = getAPI.data.data.content;
        res.status(200).json(containers);
    } catch (error) {
        res.status(404).json({ msg: "Not found!" });
    }

}

export default requestCosco;