"use client";

import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { newDemoData } from "@/utils/demoData"
import { Pagination } from 'react-bootstrap';
import Link from "next/link";
import Image from "next/image";

interface NewsJsonType1Subtype1 {
  no: string;
  org_no: string;
  type: string;
  sub_type: string;
  headline: string;
  detail: string;
  headline_en: string;
  detail_en: string;
  start: string;
  end: string;
  fromnews: string;
  url: string;
}

function NewFetch({ params }: { params: { slug: string } }) {
  const [newList, setNewList] = useState<NewsJsonType1Subtype1[]>(newDemoData)
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res: AxiosResponse<NewsJsonType1Subtype1[]> = await axios.get(
          "https://news.rbru.ac.th/newsrb_json/news_json.php?type=1&sub_type=1"
        );
        setNewList(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  // Custom function to decode certain entities
  const customDecode = (input: string): string => {
    let decoded = input.replace(/&amp;/g, '&');     // Decode &amp; to &
    decoded = decoded.replace(/&#40;/g, '(');       // Decode &#40; to (
    decoded = decoded.replace(/&#41;/g, ')');       // Decode &#41; to )
    decoded = decoded.replace(/&quot;/g, '"');      // Decode &quot; to "
    decoded = decoded.replace(/&ldquo;/g, '“');     // Decode &ldquo; to “
    decoded = decoded.replace(/&rdquo;/g, '”');     // Decode &rdquo; to ”
    decoded = decoded.replace(/&#58;/g, ':');       // Decode &#58; to :
    decoded = decoded.replace(/&lt;/g, '<');        // Decode &lt; to <
    decoded = decoded.replace(/&gt;/g, '>');        // Decode &gt; to >
    return decoded;
  };

  return (
    <>
      {newList
        ?.filter(value => value.no === params.slug)
        .map((value, index) => (
          <div key={index}>
            <h1>{customDecode(value.headline)}</h1>
            <h3>{customDecode(value.detail)}</h3>
            <div></div>
          </div>
        ))}


    </>
  );
}

export default NewFetch;
