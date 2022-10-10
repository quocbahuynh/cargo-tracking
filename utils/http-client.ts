import axios, { Method, AxiosResponse } from 'axios';

interface Options {
    url: string;
    data?: object | string;
    params?: object;
    contentType?: string;
    header?: object;
}

interface FullOptions extends Options {
    method: Method;
}

const request = (arg: FullOptions): Promise<AxiosResponse> => {
    const {
        method,
        contentType = 'application/json',
        url,
        data,
        params,
    } = arg;

    return axios.request({
        method,
        url,
        data,
        params,
        headers: {
            'content-type': contentType,
        },
    });
}

const httpClient = {
    get: (arg: Options): Promise<AxiosResponse> => {
        return request({ ...arg, method: 'GET' });
    },
    post: (arg: Options): Promise<AxiosResponse> => {
        return request({ ...arg, method: 'POST' });
    }
};

export default httpClient;
