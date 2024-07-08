import api from '../api'

export default {
    async CreateClass(data) {
        try {
            api.post('/CreateClass', data)
        } catch (err) {
            console.log(err)
        }
    },
    async DeleteClass(id) {
        try {
            api.delete(`/DeleteClass/${id}`)
        } catch (err) {
            console.log(err)
        }
    },
    async getAllAulas() {
        try {
            const response = api.get('/getAllClasses')
            return response
        } catch (err) {
            console.log(err)
        }
    },
    async getImage() {
        try {
            const response = `${api.defaults.baseURL}`;
            return response
        } catch (err) {
            console.log(err)
        }
    },
    async ChangeClass(Classid,data, config) {
        try {
            api.put(`/updateClass/${Classid}`, data,config);
        } catch (err) {
            console.log(err)
        }
    },
    async ChangeImage(Classid,data, config) {
        try {
            api.put(`/updateImage/${Classid}`, data,config);
        } catch (err) {
            console.log(err)
        }
    },
    async DeleteImage(Classid) {
        try {
            api.put(`/deleteImage/${Classid}`);
        } catch (err) {
            console.log(err)
        }
    },
    
    async getDesignAulas(type){
        try {
            const response =api.get(`/findClassesByType/${type}`);
            return response;
        } catch (e) {
            console.log(e)
        }
    },
    async getSpecific(id){
        try {
            const response = api.get(`/findClassesById/${id}`);
            return response;
        } catch (e) {
            console.log(e)
        }
    },
      
}