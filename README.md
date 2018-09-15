# react-portal-func

functionalize the component in portal

## how to use

```
// showModal.js
import React from 'react';
import { Button, Modal } from 'antd';
import wrap from 'react-portal-func';
export default ({ title }) => {
    let _title_ = title;
    let visible = true;

    return wrap(({resolve, reject, render}) => (
        <Modal title={_title_} visible={visible}
            onOk={() => {
                visible = false;
                resolve(true);
            }}
            onCancel={() => {
                visible = false;
                resolve(false); // resolve & reject just call 'render' inside.
            }}
        >
            <p>Some contents...</p>
            <Button
                onClick={() => {
                    _title_ = 'react-portal-func';
                    render();  // re-render the component
                }}
            >
                change title
            </Button>
        </Modal>
    ));
};

// index.js
const data = await showModal({ title: 'I`m a title' }); // return a promise
console.log(data); // true/false
```
