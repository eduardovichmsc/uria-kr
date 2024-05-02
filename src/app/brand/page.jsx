"use client";
import { useState } from "react";
import "./brand.css";
import Image from "next/image";
import Question from "@/components/pages/Brand/Question";

export default function Brand() {
  const [plus, setPlus] = useState(false);

  return (
    <main className="brand main-wrapper">
      <div className="banner_wrapper">
        <div className="banner_item brand_banner">
          <p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, height: "max-content" }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="banner_text brand_title"
          >
            EXPLORE OUR BRAND
          </p>
          <p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, height: "max-content" }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="banner_text banner_text_secondary"
          >
            We believe that clarity, percision, and innovation are more than
            just words - they're the guiding principles that drive everything we
            do. Since our inception, we've been on a mission to revolutionize
            the eyewear industry, delivering unparalleled quality, styles, and
            performance to our customers around the globe.
          </p>
        </div>
        <div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="banner_item"
        >
          <Image
            src={"/main-L1.jpg"}
            fill
            className="banner_image"
            alt="main_L1"
          />
        </div>
      </div>

      <div className="story_wrapper container">
        <div className="main-title">Our Story</div>
        <div className="story_inner">
          <div className="story_item">
            Our story begins with a simple yet powerful vision: to redefine the
            eyewear industry by combining innovation, craftsmanship, ad style.
            Founded in 2015 by a team of passionate individuals with a shared
            commitment to excellence, URIA quickly established itself as a
            traiblazer in the field. From our earliest days in a small workshop
            to our current position as a global leader in eyewear, our journey
            has been marked by innovation, determination, and a relentless
            pursuit of perfection.
          </div>
          <div className="story_item">
            As we look to the future our story continues to unfold, guided by
            the same principles that have defined us from the beginning. With
            unwavering dedication to quality, integrity, and customer
            satisfaction, URIA remains committed to crafting eyewear that not
            only enhances vision but also reflects the unique style and
            personality of each wearer. Join us as we write the next chapter of
            our story - a chapter filled with innovation, inspiration, and
            endless possibilities.
          </div>
          <div
            style={{ backgroundImage: "url(/main_mov_bg.jpg)" }}
            className="story_image_wrapper"
          >
            {/* image */}
          </div>
        </div>
      </div>

      <div className="faqs_wrapper container">
        <div className="main-title">FAQs</div>
        <div className="faqs_inner">
          <div className="faqs_item">
            <Question
              title="Where is URIA based?"
              body="We recommend cleaning your URIA eyewear regularly with a lens cleaning
        solution and a microfiber cloth to remove dirt, oils, and smudges. Avoid
        using harsh chemicals or abrasive materials, as they may damage the
        lenses or frame."
              isActive={false}
            />
            <Question
              title="How do I care for my URIA eyewear?"
              body="We recommend cleaning your URIA eyewear regularly with a lens cleaning
        solution and a microfiber cloth to remove dirt, oils, and smudges. Avoid
        using harsh chemicals or abrasive materials, as they may damage the
        lenses or frame."
              isActive={true}
            />
            <Question
              title="How do I care for my URIA eyewear?"
              body="We recommend cleaning your URIA eyewear regularly with a lens cleaning
        solution and a microfiber cloth to remove dirt, oils, and smudges. Avoid
        using harsh chemicals or abrasive materials, as they may damage the
        lenses or frame."
              isActive={false}
            />
            <Question
              title="How do I care for my URIA eyewear?"
              body="We recommend cleaning your URIA eyewear regularly with a lens cleaning
        solution and a microfiber cloth to remove dirt, oils, and smudges. Avoid
        using harsh chemicals or abrasive materials, as they may damage the
        lenses or frame."
              isActive={false}
            />
          </div>
          <div className="faqs_item"></div>
        </div>
      </div>
    </main>
  );
}
