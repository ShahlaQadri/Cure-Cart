import toast from "react-hot-toast"
export const responseToste = (res,navigate,url)=>{
    if("data" in res){
        toast.success(res.data.msg)
        if(navigate) navigate(url)
    }else{
const data= res.error.data
toast.error(data.msg)
}

}