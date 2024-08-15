import { Pagination, ProductTable, RowsPerPage, Sidebar, WhiteButton } from "../components";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { AiOutlineExport } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";

const Article = () => {
  const [params, setParams] = useState({page:1, perpage:10, status:'publish',search:''})
  const [data, setData] = useState([])
  const [totalRecords, setTotalRecords] = useState(0)
  console.log(params)
  useEffect(()=>{ 
    axios.get(`http://localhost:8080/v1/article/${params.perpage}/${params.page}?status=${params.status}&search=${params.search}`).then(res=>{
      setData(res?.data?.data)
      setTotalRecords(res?.data?.totalRecords)
    } )
  }, [JSON.stringify(params)])
  return (
    <div className="h-auto border-t dark:border-blackSecondary border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="dark:bg-blackPrimary bg-whiteSecondary w-full ">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                All Article
              </h2>
              <p className="dark:text-whiteSecondary text-blackPrimary text-base font-normal flex items-center">
                <span>Dashboard</span>{" "}
                <HiOutlineChevronRight className="text-lg" />{" "}
                <span>All Article</span>
              </p>
            </div>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
              {/* <button className="dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 w-32 py-2 text-lg hover:border-gray-500 duration-200 flex items-center justify-center gap-x-2">
                <AiOutlineExport className="dark:text-whiteSecondary text-blackPrimary text-base" />
                <span className="dark:text-whiteSecondary text-blackPrimary font-medium">Export</span>
              </button> */}
              <WhiteButton link="/article/create-article" text="Add a Article" textSize="lg" py="2" width="48"><HiOutlinePlus className="dark:text-blackPrimary text-whiteSecondary" /></WhiteButton>
            </div>
          </div>
          <div style={{display:'flex', gap:'20px', marginTop:'30px',marginLeft:'30px'}}>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
             
              <button onClick={()=>{setParams({...params, status:'publish'})}} className={`dark:bg-whiteSecondary ${params.status=="publish"?"bg-blackPrimary":"bg-whiteSecondary"} w-${48} py-${"2"} text-${"lg"} dark:hover:bg-white hover:bg-gray-800 bg-blackPrimary duration-200 flex items-center justify-center gap-x-2`}  ><span className={`dark:text-blackPrimary ${params.status=="publish"?" text-whiteSecondary":" text-blackPrimary"} font-semibold`}>
        {"Published"}
      </span></button>
      <button onClick={()=>{setParams({...params, status:'draft'})}}  className={`dark:bg-whiteSecondary ${params.status=="draft"?"bg-blackPrimary":"bg-whiteSecondary"} w-${48} py-${"2"} text-${"lg"} dark:hover:bg-white hover:bg-gray-800 bg-blackPrimary duration-200 flex items-center justify-center gap-x-2`}  ><span className={`dark:text-blackPrimary ${params.status=="draft"?" text-whiteSecondary":" text-blackPrimary"} font-semibold`}>
        {"Drafts"}
      </span></button>
      <button onClick={()=>{setParams({...params, status:'thrash'})}}  className={`dark:bg-whiteSecondary ${params.status=="thrash"?"bg-blackPrimary":"bg-whiteSecondary"} w-${48} py-${"2"} text-${"lg"} dark:hover:bg-white hover:bg-gray-800 bg-blackPrimary duration-200 flex items-center justify-center gap-x-2`} ><span className={`dark:text-blackPrimary ${params.status=="thrash"?" text-whiteSecondary":" text-blackPrimary"} font-semibold`}>
        {"Trashed"}
      </span></button>
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center mt-5 max-sm:flex-col max-sm:gap-2">
            <div className="relative">
              <HiOutlineSearch className="text-gray-400 text-lg absolute top-3 left-3" />
              <input
                onChange={(e)=>{setParams({...params,search:e.target.value})}}
                type="text"
                className="w-60 h-10 border dark:bg-blackPrimary bg-white border-gray-600 dark:text-whiteSecondary text-blackPrimary outline-0 indent-10 focus:border-gray-500"
                placeholder="Search Article..."
              />
            </div>
            {/* <div>
              <select
                className="w-60 h-10 dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 dark:text-whiteSecondary text-blackPrimary outline-0 pl-3 pr-8 cursor-pointer hover:border-gray-500"
                name="sort"
                id="sort"
              >
                <option value="default">Sort by</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div> */}
          </div>
          <div style={{maxWidth:'330px'}}> 
          <ProductTable data={data}  params={params} setParams={setParams} />

          </div>
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-6 max-sm:flex-col gap-4 max-sm:pt-6 max-sm:pb-0">
            <RowsPerPage params={params} setParams={setParams} />
            <Pagination params={params} totalRecords={totalRecords} setParams={setParams} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Article;
