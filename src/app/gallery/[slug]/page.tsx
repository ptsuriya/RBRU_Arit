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
  topic: string
  detail: string
  headline_en: string
  detail_en: string
  start: string
  end: string
  fromnews: string
  url: string
}


interface GalJson {
  no_activity: string
  name_photo: string
}

function NewFetch({ params }: { params: { slug: string } }) {
  //const [newList, setNewList] = useState<NewsJsonType1Subtype1[]>(newDemoData)
  const [newList, setNewList] = useState<NewsJsonType1Subtype1[]>([])
  const [galList, setGalList] = useState<GalJson[]>([]);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res: AxiosResponse<NewsJsonType1Subtype1[]> = await axios.get(
          "https://news.rbru.ac.th/newsrb_json/gallery_json.php?limitImg=10"
        );
        setNewList(res.data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchNews()
  }, []);

  useEffect(() => {
    const fetchGal = async () => {
      try {
        const resg: AxiosResponse<GalJson[]> = await axios.get(
          `https://news.rbru.ac.th/newsrb_json/img_json.php?no=${params.slug}`
        );
        setGalList(resg.data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchGal()
  }, [])

  return (
    <>
      {newList
        ?.filter((value) => value.no === params.slug)
        .map((value, index) => (
          <div key={index}>
            <h1>{parse(CustomDecode(value.topic))}</h1>
            <h3>{parse(CustomDecode(value.detail))}</h3>
            <div>
            </div>
          </div>
        ))}

      {galList.map((datas,idx) =>(
        <div key={idx}>
          <img src={datas.name_photo} alt="" />
        </div>
      ))}


    </>
  )
}

export default NewFetch
