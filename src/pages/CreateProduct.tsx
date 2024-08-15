import { ImageUpload, InputWithLabel, Sidebar } from "../components";
import { HiOutlineSave } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiOutlineSave } from "react-icons/ai";
import SimpleInput from "../components/SimpleInput";
import TextAreaInput from "../components/TextAreaInput";
import SelectInput from "../components/SelectInput";
import { selectList, stockStatusList } from "../utils/data";
import { useEffect, useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [err, setError] =  useState<any[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const handleSave = (status:string)=>{
    axios.post('http://localhost:8080/v1/article',{title:title,content:content,category:category,status:status}).then(res=>{
      window.location.href="/"
    }).catch(err=>{
      if(err?.response?.data?.data){
        setError(err?.response?.data?.data)
      }else{
        setError([])
      }
      console.log(err)
    })
  }
  console.log(err?.find(aa=>aa?.field=="Title"))
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className=" bg-whiteSecondary w-full ">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Add new article
              </h2>
            </div>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
              <button onClick={()=>handleSave('draft')} className="dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 w-48 py-2 text-lg dark:hover:border-gray-500 hover:border-gray-400 duration-200 flex items-center justify-center gap-x-2">
                <AiOutlineSave className="dark:text-whiteSecondary text-blackPrimary text-xl" />
                <span className="dark:text-whiteSecondary text-blackPrimary font-medium">
                  Save draft
                </span>
              </button>
              <button
               onClick={()=>handleSave('publish')} 
                className="dark:bg-whiteSecondary bg-blackPrimary w-48 py-2 text-lg dark:hover:bg-white hover:bg-black duration-200 flex items-center justify-center gap-x-2"
              >
                <HiOutlineSave className="dark:text-blackPrimary text-whiteSecondary text-xl" />
                <span className="dark:text-blackPrimary text-whiteSecondary font-semibold">
                  Publish
                </span>
              </button>
            </div>
          </div>

          {/* Add Product section here  */}
          <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8 grid grid-cols-1 gap-x-10 max-xl:grid-cols-1 max-xl:gap-y-10">
            {/* left div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Basic information
              </h3>

              <div className="mt-4 flex flex-col gap-5">
                <InputWithLabel label="Title">
                  <SimpleInput
                   onChange={(e)=>setTitle(e.target.value)}
                    type="text"
                    placeholder="Enter a article title..."
                  />
                 {err?.find(aa=>aa?.field=="Title")?<div style={{color:'red'}}>{err?.find(aa=>aa?.field=="Title")?.message}</div>:""}
                </InputWithLabel>

                <InputWithLabel label="content">
                  <TextAreaInput
                   onChange={(e)=>setContent(e.target.value)}
                    placeholder="Enter a content..."
                    rows={4}
                    cols={50}
                  />
                   {err?.find(aa=>aa?.field=="Content")?<div style={{color:'red'}}>{err?.find(aa=>aa?.field=="Content")?.message}</div>:""}
                </InputWithLabel>

                <InputWithLabel label="Category">
                <SimpleInput
                  onChange={(e)=>setCategory(e.target.value)}
                    type="text"
                    placeholder="Enter a category..."
                  />
                   {err?.find(aa=>aa?.field=="Category")?<div style={{color:'red'}}>{err?.find(aa=>aa?.field=="Category")?.message}</div>:""}
                </InputWithLabel>
              </div>

             

              
              
            </div>

            {/* right div */}
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateProduct;
