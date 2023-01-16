import "./image.css";
import ImageItem from "./ImageItem";
import { useState } from "react";
import Button from "./Button";

const imageItems = [
  <img
    className="pic"
    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vestito-limoni-hm-1596562920.png?resize=480:*"
  ></img>,
  <img
    className="pic"
    src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F03%2F24%2F03240c1ed929dd237fbe7923c9fb50bb38b184a6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  ></img>,
  <img
    className="pic"
    src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F73%2F2b%2F732b793938ea7226b709383d84903af2d8950940.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_dresses_maxidresses%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
  ></img>,

  <img
    className="pic"
    src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7d%2Fd4%2F7dd41c622c4c9dc324039ee52a173bc6bdb7c2ef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
  ></img>,
  <img
    className="pic"
    src="https://i2.wp.com/blog.cliomakeup.com/wp-content/uploads/2021/08/cliomakeup-hm-abbigliamento-autunno-2021-teamclio-1.jpg?resize=696%2C1044&ssl=1"
  ></img>,
  <img
    className="pic"
    src="https://i2.wp.com/blog.cliomakeup.com/wp-content/uploads/2021/08/cliomakeup-hm-abbigliamento-autunno-2021-teamclio-4.jpg?resize=696%2C1044&ssl=1"
  ></img>,
  <img
    className="pic"
    src="https://i0.wp.com/blog.cliomakeup.com/wp-content/uploads/2021/08/cliomakeup-hm-abbigliamento-autunno-2021-teamclio-2.jpg?resize=696%2C889&ssl=1"
  ></img>,
  <img
    className="pic"
    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vestiti-online-donna-hm-1587458740.jpeg?resize=320:*"
  ></img>,
];

const buttonItems = ["button1", "button2", "button3", "button5"];
export default function Image() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="box">
        {imageItems.map((itemimg) => {
          return (
            <div className="imgPlusBtn">
              <ImageItem e={itemimg} />
              <Button setShowHandler={setShow} showValue={show} />
            </div>
          );
        })}
      </div>
    </>
  );
}
