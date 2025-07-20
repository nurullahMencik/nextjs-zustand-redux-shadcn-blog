import {create} from "zustand"

interface StoreState{
    headerText:string,
    footerText:string,
    setText:(text:string) =>void;
}

const useStore = create<StoreState>((set)=>({
    headerText:"lo",
    footerText:"default",
    setText:(text:string)=>{
        set(()=>({
            headerText:text || "lo",
            footerText:text || "lo",
        }))
    }
}))    
export default useStore