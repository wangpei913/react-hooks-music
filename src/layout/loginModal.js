import React from 'react';
import { Modal, Divider, message, Checkbox } from 'antd';

import '../assets/style/layout.scss';

function LoginModal ({visible, cancelEvent}) {
    function handleCancel () {
        cancelEvent(false)
    }
    function messageSpan (info) {
        message.warning(`${info} 暂未开放,敬请期待!`);
    }
    return (
        <React.Fragment>
            <Modal
                title="登录"
                mask={false}
                visible={visible}
                onCancel={handleCancel}
                footer={null}
                style={{top: '25%'}}
                maskClosable={false}
            >
                <ul className="modal-ul">
                    <li className="left-li">
                        <span className="span-one">&nbsp;</span>
                        <span className="span-two">手机号登录</span>
                        <span className="span-three">注册</span>
                    </li>
                    <Divider type="vertical" style={{height: '100%'}}/>
                    <li className="right-li">
                        <span onClick={() => messageSpan('微信登录')}>微信登录</span>
                        <span  onClick={() => messageSpan('QQ登录')}>QQ登录</span>
                        <span  onClick={() => messageSpan('微博登录')}>微博登录</span>
                        <span  onClick={() => messageSpan('网易邮箱账号登录')}>网易邮箱账号登录</span>
                    </li>
                </ul>
                <span className="server"><Checkbox /><a href="">服务条款</a></span>
            </Modal>
        </React.Fragment>
    )
}

export default LoginModal;