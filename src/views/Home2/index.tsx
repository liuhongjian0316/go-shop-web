import { useState } from "react";
import React from 'react'
import { useNavigate, Outlet } from "react-router-dom"; //react-router-dom 6 路由跳转废弃useHistory 用useNavigate
import HomeStyle from "./index.module.scss";
import aaaIcon from "@assets/Images/aaa.jpg";
import viteIcon from "../../favicon.svg";
import reactIcon from "../../logo.svg";
import addIcon from "@assets/Images/add.svg";
import meIcon from "@assets/Images/me.svg";
import WindowsBar from "../../components/WindowsBar/index"
import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react';



const Index = () => {



  /**state  state部分**/
  const [num, setNum] = useState(1);
  const [obj, setObj] = useState([
    { name: "liu", age: "23" },
    { name: "liu", age: "23" },
  ]);
  const navigate = useNavigate();

  /**effect  effect部分**/

  /**methods 方法部分**/
  function addNum(params: number) {
    setNum(() => num + params);
  }

  function goToAbout() {
    navigate("/about/LJ/23", {
      //这里path这样写就相当于params传参了  前提route.js已定义： <Route path={"/about/:name/:age"} element={<About/>} />
      state: { name: "LiuJie" },
      //search: "?name=liujie&age=23", //search传参为字符串，格式务必以'?'开头，若涉及到多个参数，用'&'拼接   react-router-dom6已废弃  但是useLocation中可以获取到 如果链接有参数问号拼接的话
      //query: { name: "liujie" }, //react-router-dom6已废弃
    });
  }


  function goToMore() {
    navigate("/more");
  }

  function goToChild1() {
    navigate("/1", { state: { content: "这是Home的第1个子路由" } });
  }

  function goToChild2() {
    navigate("/2", { state: { content: "这是Home的第二个子路由" } });
  }

  const goToGitHub = () => {
    window.open("https://github.com/laoer536/");
  };
  /**styles 样式部分**/

  /**render**/
  return (
      <WindowsBar/>
  );
};

export default Index;
