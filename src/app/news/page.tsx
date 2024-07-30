"use client"

import { useState, useEffect } from "react"
import axios, { AxiosResponse } from "axios"
//import { newDemoData } from "../utils/demoData"
import Link from "next/link"
import Paginations from "@/component/Paginations"

import customDecode from "@/utils/htmlDecoder"

export interface NewsJsonType1Subtype1 {
  no: string
  org_no: string
  type: string
  sub_type: string
  headline: string
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
          "https://news.rbru.ac.th/newsrb_json/news_json.php?table=news_aritc&count=30&type=1&sub_type=1",
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
            <Link href={`/news/${value.no}`}>{customDecode(value.headline)}</Link> {/* Using custom decode */} {/* Using custom decode */}
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
