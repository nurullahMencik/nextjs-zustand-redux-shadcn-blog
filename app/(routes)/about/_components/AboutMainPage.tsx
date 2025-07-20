"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const AboutMainPage = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>{count}</h1>
      <Button
        variant="myVariants"
        className="mr-2 rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        Arttır
      </Button>
      <Button
        variant="myVariants"
        className="mr-2 rounded-xl"
        onClick={() => setCount(count - 1)}
      >
        Azalt
      </Button>
      <Button
        variant="myVariants"
        className="mr-2 rounded-xl"
        onClick={() => setCount(0)}
      >
        Reset
      </Button>
    </div>
  );
};

export default AboutMainPage;
