import { useEffect, useState } from 'react';
const Data = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch('/data.json')
            const data = await res.json();
            setData(data);
        } 

        fetchData();
    }, []);
    return {data};
};

export default Data;