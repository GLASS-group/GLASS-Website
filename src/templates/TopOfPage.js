import {useEffect} from "react";


const useTopOfPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
}

export default useTopOfPage;