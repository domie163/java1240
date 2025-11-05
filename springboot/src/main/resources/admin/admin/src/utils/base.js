const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootkebgy/",
            name: "springbootkebgy",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootkebgy/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上购物平台"
        } 
    }
}
export default base
