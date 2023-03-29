import { useEffect } from 'react';

const Gallery = () => {
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://agencyanalytics-api.vercel.app/images.json';
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);
        };

        fetchData().catch(console.error);
    }, []);

    return <div>hello world</div>;
};

export default Gallery;
