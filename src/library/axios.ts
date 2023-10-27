import { HEADER_CONFIG_WITHOUT_AUTH } from "@/constants/axios";
import { BASE_URL } from "@/constants/common";
import axios from "axios";

export const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: HEADER_CONFIG_WITHOUT_AUTH,
});


axiosClient.interceptors.request.use(function (request) {
    // Custom config --> TODO
    return request;
});
//response interceptor handler
axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response?.status) {
            if (error.response?.status === 500) {
                const errorResponse = error.response?.data as { error: string };
                return Promise.reject(new Error(String(errorResponse)));
            } else if (error.response?.status === 404) {
                return Promise.reject(new Error(String(error.message)));
            } else if (
                error.response?.status === 400
            ) {
                return error.response;
            } else {
                return Promise.reject(new Error(String(error.message)));
            }
        }
        return Promise.reject(error);
    }
);


// Path: src/library/axios.ts
export const get = async (url: string) => {
    return await axiosClient.get(url);
}

export const post = async (url: string, data: any) => {
    return await axiosClient.post(url, data);
}

export const put = async (url: string, data: any) => {
    return await axiosClient.put(url, data);
}

export const patch = async (url: string, data: any) => {
    return await axiosClient.put(url, data);
}

export const remove = async (url: string) => {
    return await axiosClient.delete(url);
}


export const doGet = async (url: string, callBackSucces: Function, callBackFail: Function) => {
    return new Promise((resolve, reject) => {
        get(url).then((response) => {
            callBackSucces(response);
            resolve(response);
        }).catch((error) => {
            callBackFail(error);
            reject(error);
        })
    });
}

export const doPost = async (url: string, data: any, callBackSucces: Function, callBackFail: Function) => {
    return new Promise((resolve, reject) => {
        post(url, data).then((response) => {
            callBackSucces(response);
            resolve(response);
        }).catch((error) => {
            callBackFail(error);
            reject(error);
        })
    });
}

export const doPut = async (url: string, data: any, callBackSucces: Function, callBackFail: Function) => {
    return new Promise((resolve, reject) => {
        put(url, data).then((response) => {
            callBackSucces(response);
            resolve(response);
        }).catch((error) => {
            callBackFail(error);
            reject(error);
        })
    });
}

export const doPatch = async (url: string, data: any, callBackSucces: Function, callBackFail: Function) => {
    return new Promise((resolve, reject) => {
        patch(url, data).then((response) => {
            callBackSucces(response);
            resolve(response);
        }).catch((error) => {
            callBackFail(error);
            reject(error);
        })
    });
}

export const doDelete = async (url: string, callBackSucces: Function, callBackFail: Function) => {
    return new Promise((resolve, reject) => {
        remove(url).then((response) => {
            callBackSucces(response);
            resolve(response);
        }).catch((error) => {
            callBackFail(error);
            reject(error);
        })
    });
}