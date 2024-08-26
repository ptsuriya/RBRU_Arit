"use client"

import { useState, useEffect } from "react"
import axios, { AxiosResponse } from "axios"
//import { newDemoData } from "@/utils/demoData"
import Link from "next/link"
import Image from "next/image"
import parse from 'html-react-parser';
import CustomDecode from "../../../utils/htmlDecoder"

interface NewsJsonType1Subtype1 {
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

function NewFetch({ params }: { params: { slug: string } }) {
  //const [newList, setNewList] = useState<NewsJsonType1Subtype1[]>(newDemoData)
  const [newList, setNewList] = useState<NewsJsonType1Subtype1[]>([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res: AxiosResponse<NewsJsonType1Subtype1[]> = await axios.get(
          "https://news.rbru.ac.th/newsrb_json/news_json.php?table=news_aritc&count=30&type=1&sub_type=1"
        );
        setNewList(res.data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchNews()
  }, [])


  return (
    <>
      {newList
        ?.filter((value) => value.no === params.slug)
        .map((value, index) => (
          <div key={index}>
            <h1>{parse(CustomDecode(value.headline))}</h1>
            <h3>{parse(CustomDecode(value.detail))}</h3>
            <div></div>
          </div>
        ))}
    </>
  )
}

export default NewFetch
