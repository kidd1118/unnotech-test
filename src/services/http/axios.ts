import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import type { AxiosOptions, RequestOptions } from './request';
import type { Result } from './response';
import { ContentTypeEnum } from './httpEnum'

class Axios {
    private instance: AxiosInstance
    private options: AxiosOptions
    constructor(options: AxiosOptions) {
        this.options = options
        this.instance = axios.create(options)
    }
    request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        const conf: AxiosOptions = config;
        const { requestOptions } = this.options
        const opt: RequestOptions = Object.assign({}, requestOptions, options)
        conf.requestOptions = opt

        return new Promise((resolve, reject) => {
            this.instance
                .request<any, AxiosResponse<Result>>(conf)
                .then((res: AxiosResponse<Result>) => {
                    resolve(res as unknown as Promise<T>)
                })
        })
    }
}

function createAxios() {
    return new Axios(
        {
            baseURL: '',
            timeout: 10 * 1000,
            headers: { 'Content-Type': ContentTypeEnum.JSON },
            requestOptions: {
            }
        })
}

export const http = createAxios()
