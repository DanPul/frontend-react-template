class AppConfig {
    private baseUrl = process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost:4000/api/";
    public dataUrl = this.baseUrl + "data/";
}

const appConfig = new AppConfig();

export default appConfig;