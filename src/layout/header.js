import React, {useState, useEffect} from 'react'
import { menuData } from '../api/menu';

import LoginModal from './loginModal';

import '../assets/style/layout.scss';


function Header () {
    const [menu, setMenu] = useState([]);
    const [subMenu, setSubMenu] = useState([])
    const [defaultIndex, changeMenu] = useState(0)
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        const findChild = (arr) => arr.find(item => item.child)
        const fetchMenu = async () => {
            const {data: {result}} = await menuData();
            setMenu(result)
            setSubMenu(findChild(result).child)
        }
        fetchMenu();
    }, []);

    function changeTab (item) {
        item = item ? item : [];
        return setSubMenu(item)
    }

    function handleCancel (val) {
        return setVisible(val)
    }
    return (
        <React.Fragment>
            <header className="header-container">
                <div className="header-body">
                    <span className="left-logo">天籁之音</span>
                    <ul className="center-menu">
                        {
                            menu.map((item, index) => {
                                return (
                                    <li key={item.key} onClick={() => {changeMenu(index); changeTab(item.child)}}>
                                        <em>{item.key}</em>
                                        {defaultIndex === index && <sub className="li-sub">&nbsp;</sub>}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="right-operation">
                        <p className="input-box">
                            <i className="iconfont icon-search1" />
                            <input type="search" className="search" placeholder="音乐/视频/电台/用户" />
                        </p>
                        <span className="login-btn" onClick={() => setVisible(true)}>登录</span>
                    </div>
                </div>
            </header>
            {
                subMenu && subMenu.length > 0 && <nav className="sub-nav">
                    {
                        subMenu.map(item => {
                            return <span key={item.key}>{item.key}</span>
                        })
                    }
                </nav>
            }
            <LoginModal visible={visible} cancelEvent={handleCancel} />
        </React.Fragment>
    )
}

export default Header;