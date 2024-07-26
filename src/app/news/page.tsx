"use client"

import { useState, useEffect } from "react"
import axios, { AxiosResponse } from "axios"
import { Pagination } from "react-bootstrap"
import { newDemoData } from "@/utils/demoData"
import Link from "next/link"

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

function NewFetch() {
  const [newList, setNewList] = useState<NewsJsonType1Subtype1[]>(newDemoData)
  // const [newList, setNewList] = useState<NewsJsonType1Subtype1[]>([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // const res: AxiosResponse<NewsJsonType1Subtype1[]> = await axios.get(
        //   "https://news.rbru.ac.th/newsrb_json/news_json.php?type=1&sub_type=1"
        // );
        // setNewList(res.data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchNews()
  }, [])

  const perpage = 12
  const totalpagenum = Math.ceil(newList.length / perpage)

  const handleNextClick = () => {
    if (pageNumber < totalpagenum) {
      setPageNumber(pageNumber + 1)
    }
  }

  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const handleFirstClick = () => setPageNumber(1)

  const handleLastClick = () => setPageNumber(totalpagenum)

  let items = []
  for (let number = 1; number <= totalpagenum; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === pageNumber}
        onClick={() => setPageNumber(number)}
      >
        {number}
      </Pagination.Item>,
    )
  }

  // Custom function to decode certain entities
  const customDecode = (input: string): string => {
    let decoded = input.replace(/&amp;/g, "&") // Decode &amp; to &
    decoded = decoded.replace(/&#40;/g, "(") // Decode &#40; to (
    decoded = decoded.replace(/&#41;/g, ")") // Decode &#41; to )
    decoded = decoded.replace(/&quot;/g, '"') // Decode &quot; to "
    decoded = decoded.replace(/&ldquo;/g, "“") // Decode &ldquo; to “
    decoded = decoded.replace(/&rdquo;/g, "”") // Decode &rdquo; to ”
    decoded = decoded.replace(/&#58;/g, ":") // Decode &#58; to :
    return decoded
  }

  return (
    <>
      {newList
        ?.slice((pageNumber - 1) * perpage, pageNumber * perpage)
        .map((value, index) => (
          <div key={index}>
            <Link href={`/news/${value.no}`}>
              {customDecode(value.headline)}
            </Link>{" "}
            {/* Using custom decode */}
          </div>
        ))}

      <Pagination>
        <Pagination.First onClick={handleFirstClick} />
        <Pagination.Prev onClick={handlePrevClick} />
        {items}
        <Pagination.Next onClick={handleNextClick} />
        <Pagination.Last onClick={handleLastClick} />
      </Pagination>
    </>
  )
}

export default NewFetch
