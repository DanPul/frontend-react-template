import axios from "axios";

class Interceptors {
    public create(): void {

        // Add request interceptor:
        axios.interceptors.request.use(request => {

            // Here you can add request headers to all future requests...
            
            return request;
            
        });
    }
}

const interceptors = new Interceptors();

export default interceptors;