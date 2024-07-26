"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

function NewFetch() {
  const [products, setProduct] = useState([]);

  console.log("Product state : ", products);

  const fetchNews = async () => {
    axios
      .get(
        "https://news.rbru.ac.th/newsrb_json/news_json.php?type=1&sub_type=1"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => {
        res.error;
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>NewFetch</div>
  );
}

export default NewFetch;
