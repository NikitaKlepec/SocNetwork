import * as axios from "axios";
import React from "react";

const instance=axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY":"2c75604d-8690-4dce-af63-4f2e1f4b5f49"}
})

export const usersApi={
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}& count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count${pageSize}`)
        .then(response => {
            return response.data;
        })
}