import Slider from "@/komponenten/Slider";

import Produktliste from "@/komponenten/Produktliste";

export default function Home() {
  return (
    <div>
 <Slider className=" d-flex justify-content-between align-items-center shadow " images={[
   { src: '/bilder/img.png', width: 800, height: 600 },
   { src: '/bilder/img2.png', width: 800, height: 600 },
   { src: '/bilder/img3.png', width: 800, height: 600 },
   { src: '/bilder/img4.png', width: 800, height: 600 },
    { src: '/bilder/img5.png', width: 800, height: 600 },
 ]} >
      </Slider>
      <h1 className="text-center text-danger">24 Std. Für Sie erreichbar!!!</h1>
      <Produktliste />
    </div>
  )
}
