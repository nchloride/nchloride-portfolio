import {useState} from 'react'

const useDetailHooks = (initialState) => {
    const [isDetailsOpen,setIsDetailsOpen] = useState(initialState);
    const toggleOpen = () => {
        setIsDetailsOpen(prevData => !prevData);
    }
    return [toggleOpen,isDetailsOpen];
}

export default useDetailHooks
