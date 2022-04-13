/**文档说明
 * @Description: 底部操作条
 * @author aijiu
 * @Email aijiu0316@gmai.com
 * @date 2022/04/09 16:21:00
 */

// @ts-nocheck
import React, {useState} from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
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
    Popup
} from 'semantic-ui-react'
import Keyevent from "react-keyevent";
import TopHeader from "../Header/index"


let barList = [
    {
        icon:'windows',
        name:'开始'
    },
    {
        icon:'home',
        name:'首页'
    },
    {
        icon:'th',
        name:'主页'
    },
    {
        icon:'smile',
        name:'朋友'
    },
    {
        icon:'history',
        name:'历史'
    },
    {
        icon:'envelope',
        name:'信息'
    },
    {
        icon:'comments',
        name:'通知'
    },
    {
        icon:'trophy',
        name:'成就'
    },
    {
        icon:'shopping cart',
        name:'商店'
    },
    {
        icon:'cogs',
        name:'设置'
    },

]



const BottomBar = ({ visible }:any) => (
    <Sidebar
        as={Segment}
        animation='overlay'
        direction='bottom'
        visible={visible}
    >
        <Grid textAlign='center'>
            <Grid.Row columns={10}>
                {barList.map((item) => (
                    <Popup
                        content={item.name}
                        key={item.icon}
                        position='top center'
                        inverted
                        trigger={
                            <Grid.Column>
                                <Icon name={item.icon} size='large' className={'bar-icon'}/>
                            </Grid.Column>
                        }
                    />
                ))}
            </Grid.Row>
        </Grid>
    </Sidebar>
)


function Index() {
    const [ visible , setVisible] =  useState(false)
    const [full, setFull] = useState(false);
    // 创建一个fullScreen的handle
    const handle = useFullScreenHandle();
    const showBar = (visible:boolean)=>{
        setVisible(visible)
    }
    const fullScreen = (full:boolean)=>{
        setFull(full)
        if(full){
            handle.enter()
        }else{
            handle.exit()
        }
    }

    const onCtrl = () =>{
        showBar(!visible)
    }

    const onChangeFull = (res:any)=>{
        res = !full
        if(res){
            handle.enter()
        }else{
            handle.exit()
        }
    }

    const onChangeMenu = (res:any)=>{
        res = !res
        showBar(res)
    }


    return (
        <Keyevent
            className="Layout"
            events={{
                onCtrl
            }}
        >
            <FullScreen
                handle={handle}
                onChange={setFull}
            >

            <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden', border: '0px' }}  onClick={() =>
                visible ? showBar(false) : ''
            }>
                <BottomBar
                    visible={visible}
                />
                <Sidebar.Pusher dimmed={visible}>
                    <Segment basic style={{margin:'0px',padding:'0px'}}>
                        <div style={{height:'100vh'}}>
                            <TopHeader isFull={full} isMenu={visible} onChangeFull={onChangeFull} onChangeMenu={onChangeMenu}/>
                        </div>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
            </FullScreen>
        </Keyevent>
    )
}

export default Index
