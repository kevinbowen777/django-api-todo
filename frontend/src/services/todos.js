import axios from 'axios';


class TodoDataService{

    getAll(token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get("https://kevinbowen.pythonanywhere.com/api/todos/");
        // return axios.get("http://localhost:8000/api/todos/");
    }

    createTodo(data, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post("https://kevinbowen.pythonanywhere.com/api/todos/", data);
        // return axios.post("http://localhost:8000/api/todos/", data);
    }

    updateTodo(id, data, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`https://kevinbowen.pythonanywhere.com/api/todos/${id}`, data);
        // return axios.put(`http://localhost:8000/api/todos/${id}`, data);
    }

    deleteTodo(id, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete(`https://kevinbowen.pythonanywhere.com/api/todos/${id}`);
        // return axios.delete(`http://localhost:8000/api/todos/${id}`);
    }

    completeTodo(id, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`https://kevinbowen.pythonanywhere.com/api/todos/${id}/complete`);
        // return axios.put(`http://localhost:8000/api/todos/${id}/complete`);
    }

    login(data){
        return axios.post("https://kevinbowen.pythonanywhere.com/api/login/", data);
        // return axios.post("http://localhost:8000/api/login/", data);
    }

    signup(data){
        return axios.post("https://kevinbowen.pythonanywhere.com/api/signup/", data);
        // return axios.post("http://localhost:8000/api/signup/", data);
    }
}

export default new TodoDataService();
