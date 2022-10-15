import React, { Component } from "react";

// 导入滚动
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// 导入滚动 样式
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          src: "/images/141661825914_.pic_hd.jpg",
          dots: [
            {
              dotPosition: { left: 250, top: 315 }, // 原点位置，设置 left top 值调整
              contentPosition: { left: 200, top: 250 }, // 内容位置
              content:
                "Check that all carpets are fixed firmly to the floor so they will not slip", // 内容
              display: false, // 内容是否显示
            },
            {
              dotPosition: { left: 400, top: 400 },
              contentPosition: { left: 300, top: 400 },
              content:
                "Make sure that steps and walkways are free of any objects or clutter. Make sure there are no uneven steps",
              display: false,
            },
            {
              dotPosition: { left: 500, top: 300 },
              contentPosition: { left: 400, top: 230 },
              content: "Make sure the carpet is firmly attached to every step.",
              display: false,
            },
            {
              dotPosition: { left: 655, top: 120 },
              contentPosition: { left: 500, top: 120 },
              content:
                "Fix loose handrails or put in new ones.Make sure handrails are on both sides of the stairs and are as long as the stairs.",
              display: false,
            },
          ],
        },
        {
          src: "/images/131661825910_.pic_hd.jpg",
          dots: [
            {
              dotPosition: { left: 120, top: 150 }, // 原点位置，设置 left top 值调整
              contentPosition: { left: 30, top: 80 }, // 内容位置
              content:
                "Keep the path from the bedroom/bed to the bathroom well-lit and clear of obstructions", // 内容
              display: false, // 内容是否显示
            },
            {
              dotPosition: { left: 500, top: 400 },
              contentPosition: { left: 400, top: 340 },
              content:
                "Make sure carpets and rugs near the bed are not slippery and secured to the floor.",
              display: false,
            },
            {
              dotPosition: { left: 250, top: 250 },
              contentPosition: { left: 150, top: 190 },
              content: "Keep the phone near the bed in case of emergency.",
              display: false,
            },
            {
              dotPosition: { left: 450, top: 250 },
              contentPosition: { left: 350, top: 190 },
              content:
                "Have a lamp close to the bed where it is easy to reach the switch.",
              display: false,
            },
          ],
        },
        {
          src: "/images/121661825907_.pic_hd.jpg",
          dots: [
            {
              dotPosition: { left: 170, top: 380 }, // 原点位置，设置 left top 值调整
              contentPosition: { left: 100, top: 320 }, // 内容位置
              content:
                "Put a no-slip rubber mat on the floor of the bathtub or shower", // 内容
              display: false, // 内容是否显示
            },
            {
              dotPosition: { left: 335, top: 39 },
              contentPosition: { left: 250, top: 50 },
              content: "Have good lighting in the bathroom.",
              display: false,
            },
            {
              dotPosition: { left: 370, top: 300 },
              contentPosition: { left: 290, top: 310 },
              content:
                "Have grab bars near toilets and on both the inside and outside of your tub and shower.",
              display: false,
            },
            {
              dotPosition: { left: 300, top: 430 },
              contentPosition: { left: 200, top: 370 },
              content:
                "Put a non-slip bath mat in fornt of the shower to dry wet feet.",
              display: false,
            },
          ],
        },
        {
          src: "/images/kitchen.jpg",
          dots: [
            {
              dotPosition: { left: 170, top: 330 }, // 原点位置，设置 left top 值调整
              contentPosition: { left: 100, top: 335 }, // 内容位置
              content: "Immediately clean spills on floors.", // 内容
              display: false, // 内容是否显示
            },
            {
              dotPosition: { left: 280, top: 140 },
              contentPosition: { left: 220, top: 100 },
              content: "Install bright lights in the kitchens.",
              display: false,
            },
            {
              dotPosition: { left: 480, top: 255 },
              contentPosition: { left: 350, top: 260 },
              content: "Keep frenquently used items within easy reach.",
              display: false,
            },
            {
              dotPosition: { left: 300, top: 380 },
              contentPosition: { left: 200, top: 380 },
              content: "Use no-slip rugs on the floor. ",
              display: false,
            },
          ],
        },
        {
          src: "/images/Hallway.jpg",
          dots: [
            {
              dotPosition: { left: 230, top: 380 }, // 原点位置，设置 left top 值调整
              contentPosition: { left: 100, top: 300 }, // 内容位置
              content:
                "Keep areas where you walk tidy. Do not leave books,papers,clothes,or other objects on the floor or stairs.", // 内容
              display: false, // 内容是否显示
            },
            {
              dotPosition: { left: 460, top: 350 },
              contentPosition: { left: 400, top: 290 },
              content:
                "Keep doorways clear so that it is easy to walk through.",
              display: false,
            },
          ],
        },
        {
          src: "/images/Livingroom.jpg",
          dots: [
            {
              dotPosition: { left: 50, top: 440 }, // 原点位置，设置 left top 值调整
              contentPosition: { left: 30, top: 400 }, // 内容位置
              content: "Secure all carpets and rugs firmly to the floor.", // 内容
              display: false, // 内容是否显示
            },
            {
              dotPosition: { left: 150, top: 180 },
              contentPosition: { left: 100, top: 185 },
              content: "Have good lighting in the bathroom.",
              display: false,
            },
            {
              dotPosition: { left: 300, top: 440 },
              contentPosition: { left: 310, top: 400 },
              content:
                "Arrange furniture and other objects so they are not in the way when you walk.",
              display: false,
            },
          ],
        },
      ],
    };
  }

  // 改变内容是否显示
  handleClick = (e) => {
    const images = this.state.images;
    images[e.target.dataset.image].dots[e.target.dataset.dot].display =
      !images[e.target.dataset.image].dots[e.target.dataset.dot].display;
    this.setState({ images });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Swiper
            className="view images"
            spaceBetween={30} // 滚动间距
            loop={true} // 循环滚动
            navigation={true} // 显示左右箭头
            modules={[Navigation]}
          >
            {this.state.images.map((item, imageKey) => {
              return (
                <SwiperSlide>
                  <div className="image">
                    <img src={item.src} />
                    {item.dots.map((item, dotKey) => {
                      return (
                        <div className="dot-content">
                          <div
                            className="dot"
                            style={{
                              left: item.dotPosition.left,
                              top: item.dotPosition.top,
                            }}
                            data-image={imageKey}
                            data-dot={dotKey}
                            onClick={this.handleClick.bind("key")}
                          ></div>
                          <div
                            className="content"
                            style={{
                              left: item.contentPosition.left,
                              top: item.contentPosition.top,
                              display: item.display ? "block" : "none",
                            }}
                          >
                            {item.content}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </header>
      </div>
    );
  }
}

export default App;
