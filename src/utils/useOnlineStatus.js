import { useEffect, useState } from "react"


useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = () =>{
        window.addEventListener("offline", () =>{ setOnlineStatus(false)})
        window.addEventListener("online", () =>{ setOnlineStatus(true)})
    }
    return onlineStatus;
        
}

export default useOnlineStatus;