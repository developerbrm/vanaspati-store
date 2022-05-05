import Image from "next/image"
import Link from "next/link"
import React, { useId } from "react"
import { svg_external_link } from "../../assets/svgs"
import img_figma from "../../assets/images/figma.jpg"
import img_figma_pulgins from "../../assets/images/figma-plugins.jpg"
import img_css from "../../assets/images/css.jpg"
import img_html from "../../assets/images/html.jpg"
import img_js from "../../assets/images/js.jpg"
import img_nextjs from "../../assets/images/nextjs.jpg"
import img_reactjs from "../../assets/images/reactjs.jpg"
import img_google_fonts from "../../assets/images/google-fonts.jpg"
import img_shopify_apis from "../../assets/images/shopify-apis.jpg"
import RenderMainHeading from "../../components/commonComponents/RenderMainHeading"

const index = () => {
  const creditsData = [
    {
      link: "https://www.figma.com/",
      heading: "Figma",
      text: "A very much thanks to the <strong>figma</strong> as it has helped me to make great looking prototypes of websites and by helping me to generate previews of my imaginations before writitng the actual code.<br />And <strong>figma</strong> also provided the neccessary stock photos and icons which i generally use in my projects.",
      image: img_figma,
    },
    {
      link: "https://www.figma.com/community/plugins/",
      heading: "Figma Plugins",
      text: "Again very much thanks to the <strong>figma</strong>  and its <strong>community</strong> and its ecosystem which allows peoples to use various icons and images for absolutly free of cost in their projects. <br /> Few of the major plugins which i mostly use are :- pexels, iconify, unsplash",
      image: img_figma_pulgins,
    },
    {
      link: "https://fonts.google.com/",
      heading: "Google Fonts",
      text: "Google fonts is a extremly handy when it comes ot good and copyright free fonts as it has more than thousands varity of the free fonts ready to be included in your project.",
      image: img_google_fonts,
    },
    {
      link: "https://shopify.dev/api/",
      heading: "Shopify APIs",
      text: "This is the backbone of the entire project as it provides the APIs to connect the frontend with backend and holds the all inventory of the products which are present in the store. <br /> A huge thanks to the sopify without them this project might be very difficult game ",
      image: img_shopify_apis,
    },
    {
      link: "https://nextjs.org/",
      heading: "Next JS",
      text: "This is the second backbone (or may i call it the first ?) of the entire project because when we call the shopify APIs we need something to show the all the JSON into a meaningful format i.e the frontend and of course serving the appropriate HTML, CSS, JS in sync with different routes.",
      image: img_nextjs,
    },
    {
      link: "https://reactjs.org/",
      heading: "React JS",
      text: "Well serioulsy you also need a explanation for the big, huge, framework which made managing frontend a piece of cake, well to a large extent :-)",
      image: img_reactjs,
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/javascript/",
      heading: "Javascript",
      text: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. ",
      image: img_js,
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML/",
      heading: "HTML",
      text: "<strong>WHAT SERIOUSLY?</strong> <br/> no offence but please google it :-)))",
      image: img_html,
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS/",
      heading: "CSS",
      text: "Ok since you are not going to google anything therefore - <br/> <strong>Cascading Style Sheets(CSS)</strong> is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
      image: img_css,
    },
  ]

  return (
    <div className="bg-custom-light-blue px-4 py-6">
      {<RenderMainHeading heading="Thanks & Credits" />}

      <div className="space-y-10">
        {creditsData.map(
          ({ heading, link, text, image = "", imageAlt = "" }) => (
            <div key={useId()} className="space-y-3">
              <Link href={link}>
                <a target="_blank" title={`Visit ${heading}`}>
                  <h4 className="flex items-center gap-2 font-dosis text-2xl font-[500] text-custom-dark-blue underline">
                    <span>{heading}</span>
                    <span className="h-5 w-5">{svg_external_link}</span>
                  </h4>
                </a>
              </Link>
              <p
                className="text-justify text-custom-medium-black"
                dangerouslySetInnerHTML={{ __html: text }}
              ></p>
              <div className="img_wrapper relative aspect-[1.33] w-full overflow-hidden rounded-[20px] shadow-md">
                <Image
                  src={image}
                  blurDataURL={image}
                  alt={imageAlt}
                  layout="fill"
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default index
