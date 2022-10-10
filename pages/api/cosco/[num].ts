import type { NextApiRequest, NextApiResponse } from 'next'
import { apiLinks, httpClient } from '../../../utils'

const requestCosco = async (
    req: NextApiRequest,
    res: NextApiResponse<object>
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