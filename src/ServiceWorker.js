const ServiceWorker = () => {
    let url = process.env.PUBLIC_URL+"sw.js";
    navigator.serviceWorker.register(url).then((response)=>{
        console.log("PROGRESSIVE WEB APP")
    })
};
export default ServiceWorker;
