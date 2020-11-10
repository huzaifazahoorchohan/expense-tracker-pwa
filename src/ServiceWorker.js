const ServiceWorker = () => {
    let url = process.env.PUBLIC_URL+"sw.js";
    navigator.serviceWorker.register(url).then((response)=>{
        console.log("response", response)
    })
};

export default ServiceWorker;
