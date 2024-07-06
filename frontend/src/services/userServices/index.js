import api from '../api'


export default {
    async CreateClass(data) {
        try {
            console.log(data)
            api.post('/ttclasses', data)
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
    async ChangeClass(Classid,data, config) {
        try {
            api.put(`/updateClass/${Classid}`, data,config);
            console.log(data)
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
    async updateClass(id, Data) {
        
        try {
            await api.put(`/updateClass/${id}`, Data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (err) {
            console.error('Erro ao enviar avatar:', err);
            throw err;
        }
    },
      
}