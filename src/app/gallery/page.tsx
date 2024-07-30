"use client"

import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Pagination } from "react-bootstrap";
//import { newDemoData } from "../utils/demoData";
import Link from "next/link";
import Paginations from "@/component/Paginations";
import customDecode from "@/utils/htmlDecoder";
import parse from 'html-react-parser';

export interface NewsJsonType1Subtype1 {
  no: string
  org_no: string
  type: string
  sub_type: string
  topic: string
  detail: string
  headline_en: string
  detail_en: string
  start: string
  end: string
  fromnews: string
  url: string
}

function NewFetch() {
  //const [newList, setNewList] = useState<NewsJsonType1Subtype1[]>(newDemoData)
  const [newList, setNewList] = useState<NewsJsonType1Subtype1[]>([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res: AxiosResponse<NewsJsonType1Subtype1[]> = await axios.get(
          "https://news.rbru.ac.th/newsrb_json/gallery_json.php?limitImg=10",
        )
        setNewList(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchNews()
  }, [])

  const perpage = 6
  const totalpagenum = Math.ceil(newList.length / perpage)

  const handlePageChange = (newPage: number) => {
    setPageNumber(newPage);
  };

  return (
    <>
      {newList
        .slice((pageNumber - 1) * perpage, pageNumber * perpage)
        .map((value, index) => (
          <div key={index}>
            <Link href={`/gallery/${value.no}`}>{parse(customDecode(value.topic))}</Link> {/* Using custom decode */} {/* Using custom decode */}
            
            
          </div>
        ))}

      <Paginations
        totalPages={totalpagenum}
        currentPage={pageNumber}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default NewFetch
