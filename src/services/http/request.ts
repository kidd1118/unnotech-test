import { AxiosRequestConfig } from 'axios';

export interface AxiosOptions extends AxiosRequestConfig {
    requestOptions?: RequestOptions;
}

export interface RequestOptions {
}