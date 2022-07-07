import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [loading,setloading] = useState(false);
    const [data, setdata] = useState([]);
    const [error, seterror] = useState(false);
  
    const take = async () => {
        try {
            setloading(true);
            const res = await fetch(url);
            const datas = await res.json();
            setdata(datas.data)
            setloading(false)
        } catch (error) {
            setloading(false)
            seterror(true)
            
        }
    }
    useEffect(() => {
        take();
    },[])
    return {
        data, loading, error
    }
}

export default useFetch
