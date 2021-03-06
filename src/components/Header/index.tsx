/**文档说明
 * @Description: 此组件没有使用 仅做示例  表明项目目录结构
 * @author liuJie
 * @Email 1547698569@qq.com
 * @date 2021/12/23 9:41
 */

import React from "react";
import HeaderStyle from './index.module.scss'
import reactIcon from "../../logo.svg";
import {Icon} from 'semantic-ui-react'

class Index extends React.Component{
  constructor(props:any) {
    super(props);
    const {isFull,isMenu,changeFull}:any = this.props;
    this.state = {
      isFull:isFull,
      isMenu:isMenu,
      textInput:null
    };
    this.changeIsFull = this.changeIsFull.bind(this)
    this.changeIsMenu = this.changeIsMenu.bind(this)
    this.changeFull = this.changeFull.bind(this)
    this.changeMenu = this.changeMenu.bind(this)
    this.showKeys = this.showKeys.bind(this)
  }
  componentWillReceiveProps(nextProps: { isFull: any; isMenu: any; }){
    this.setState({
      isFull: nextProps.isFull,
      isMenu: nextProps.isMenu,
    });
  }

  changeIsFull(state:boolean){
    this.setState({
      isFull: state
    })
  }
  changeIsMenu(state:boolean){
    this.setState({
      isMenu: state
    })
  }

  changeFull(){
    const {onChangeFull} = this.props
    this.setState({
      isFull: !this.state.isFull
    })
    onChangeFull(this.state.isFull)
  }
  changeMenu(){
    const {onChangeMenu} = this.props
    this.setState({
      isMenu: !this.state.isMenu
    })
    onChangeMenu(this.state.isMenu)
  }
  showKeys(){
    this.state.textInput.focus()
  }


  render(){
    return (
        <div className={HeaderStyle.header}>
          <div className={HeaderStyle.viteReact}>
            <img src={reactIcon} className={HeaderStyle.react} alt={"react"} />
            <div className={HeaderStyle.logoText}>GO 商城</div>
          </div>
          <div className={HeaderStyle.endBox}>
              <div className={HeaderStyle.searchBox} onClick={this.showKeys}>
                <input type="search" className={HeaderStyle.searchInput} confirm-type={'search'}
                       ref={input => (this.state.textInput = input)}/>
                <a href="#" className={HeaderStyle.searchBtn}>
                  <Icon name='search' className={HeaderStyle.icon_search}/>
                </a>
              </div>
              <Icon name='user' className={HeaderStyle.icon} />
              <Icon name='shopping cart' className={HeaderStyle.icon} />
              <Icon name='windows' className={HeaderStyle.icon} onClick={this.changeMenu}/>
              {(<Icon name={this.state.isFull ? 'compress': 'expand'} className={HeaderStyle.icon} onClick={this.changeFull}/>)}
            </div>
        </div>
    )
  }
}

export default Index

