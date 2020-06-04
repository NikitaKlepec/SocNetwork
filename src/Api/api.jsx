import * as axios from "axios";
import React from "react";

const instance=axios.create({

    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY":"2c75604d-8690-4dce-af63-4f2e1f4b5f49"}
})

export const usersAPI={
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please profileApi object')
        return profileAPI.getProfile(userId)
    }
}

export const authApi={
    me(){
        return instance.get('auth/me')
    }
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count${pageSize}`)
        .then(response => {
            return response.data;
        })
}

export const profileAPI={
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get('profie/status/'+userId);
    },
    updateStatus(status){
        return instance.put('propfile/status',{status:status})
    }
}