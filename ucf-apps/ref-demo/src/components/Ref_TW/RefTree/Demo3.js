/**
 *
 * @title ref-tree 参照_tw-树形_tw
 * @description 具有单选多选的树形参照_tw
 *
 */

import React, { Component } from 'react';
import RefTreeWithInput   from 'pap-refer/lib/ref-tree.js'; import "pap-refer/lib/ref-tree.css";
import {Button,Form} from 'tinper-bee';
import Card from '../Card'
let code = 
`
<div>
        <div className="demo-label">
            <span >组织部门：_tw</span>
            <RefTreeWithInput
                title={'组织部门_tw'}
            
                param={{
                    "refCode": "neworgdept_tree"
                }}
                refModelUrl={{
                    treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                }}
                matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
                filterUrl='/pap_basedoc/common-ref/filterRefJSON'
                multiple={false}
                searchable={true}
                checkStrictly= {true}
                strictMode = {true}
                displayField='{refname}'
                valueField='refpk'
                lazyParam = {['entityType', 'type']}
                nodeDisplay = {(record) => {
                    if(record.entityType === "mainEntity"){
                        return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
                    }else if(record.entityType === "subEntity"){
                        return (<span><i className="uf uf-users" /> {record.refname} </span>);
                    }
                }}
                {...getFieldProps('code', {
                    initialValue: '{"refname":"","refpk":""}',
                    rules: [{
                        message: '提示：请选择_tw',
                        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                    }]
                })}
            />
            <span style={{
                color: 'red'
            }}>
                {
                    getFieldError('code')
                }
            </span>
        </div>
        <div className="demo-label">
            <span >组织部门懒加载：_tw</span>
            <RefTreeWithInput
                title={'组织部门_tw'}
            
                param={{
                    "refCode": "neworgdept_tree"
                }}
                refModelUrl={{
                    treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                }}
                matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
                filterUrl='/pap_basedoc/common-ref/filterRefJSON'
                multiple={false}
                searchable={true}
                checkStrictly= {true}
                strictMode = {true}
                displayField='{refname}'
                valueField='refpk'
                
                lazyModal={true}
                lazyParam = {['entityType', 'type']}
                nodeDisplay = {(record) => {
                    if(record.entityType === "mainEntity"){
                        return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
                    }else if(record.entityType === "subEntity"){
                        return (<span><i className="uf uf-users" /> {record.refname} </span>);
                    }
                }}
                {...getFieldProps('code1', {
                    initialValue: '{"refname":"","refpk":""}',
                    rules: [{
                        message: '提示：请选择_tw',
                        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                    }]
                })}
            />
            <span style={{
                color: 'red'
            }}>
                {
                    getFieldError('code1')
                }
            </span>
        </div>
</div>
`
class Demo3 extends Component {
    constructor() {
        super();
        this.state = {
            value:''
        }

    }
    render() {
        
        const { getFieldProps, getFieldError } = this.props.form;
        return (
                    <Card
                        title="组合树_tw"
                        codeText={code}
                        footer={
                            <Button colors="primary"
                                style={{
                                    margin: 'auto 5px',
                                    height: '30px',
                                    padding: '0px'
                                }}
                                onClick={() => {
                                    this.props.form.validateFields((err, values) => {
                                        if(err) return;
                                        alert(`您选择的是_tw${JSON.stringify(values)}`)
                                    });
                                }}
                            >
                                提交_tw
                            </Button>
                        }
                    >
                        <div className="demo-label">
                            <span >组织部门：_tw</span>
                            <RefTreeWithInput
                                title={'组织部门_tw'}
                            
                                param={{
                                    "refCode": "neworgdept_tree"
                                }}
                                refModelUrl={{
                                    treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                                }}
                                matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
                                filterUrl='/pap_basedoc/common-ref/filterRefJSON'
                                multiple={false}
                                searchable={true}
                                checkStrictly= {true}
                                strictMode = {true}
                                displayField='{refname}'
                                valueField='refpk'
                                lazyParam = {['entityType', 'type']}
                                lang={this.props.lang} emptyBut={true}
                                emptyBut={true}

                                nodeDisplay = {(record) => {
                                    if(record.entityType === "mainEntity"){
                                        return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
                                    }else if(record.entityType === "subEntity"){
                                        return (<span><i className="uf uf-users" /> {record.refname} </span>);
                                    }
                                }}
                                {...getFieldProps('code', {
                                    initialValue: '{"refname":"","refpk":""}',
                                    rules: [{
                                        message: '提示：请选择_tw',
                                        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                                    }]
                                })}
                            />
                            <span style={{
                                color: 'red'
                            }}>
                                {
                                    getFieldError('code')
                                }
                            </span>
                        </div>
                        <div className="demo-label">
                            <span >组织部门懒加载：_tw</span>
                            <RefTreeWithInput
                                title={'组织部门_tw'}
                            
                                param={{
                                    "refCode": "neworgdept_tree"
                                }}
                                refModelUrl={{
                                    treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                                }}
                                matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
                                filterUrl='/pap_basedoc/common-ref/filterRefJSON'
                                multiple={false}
                                searchable={true}
                                checkStrictly= {true}
                                strictMode = {true}
                                displayField='{refname}'
                                valueField='refpk'
                                
                                lazyModal={true}
                                lazyParam = {['entityType', 'type']}
                                nodeDisplay = {(record) => {
                                    if(record.entityType === "mainEntity"){
                                        return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
                                    }else if(record.entityType === "subEntity"){
                                        return (<span><i className="uf uf-users" /> {record.refname} </span>);
                                    }
                                }}
                                lang={this.props.lang} 
                                emptyBut={true}
                                {...getFieldProps('code1', {
                                    initialValue: '{"refname":"","refpk":""}',
                                    rules: [{
                                        message: '提示：请选择_tw',
                                        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                                    }]
                                })}
                            />
                            <span style={{
                                color: 'red'
                            }}>
                                {
                                    getFieldError('code1')
                                }
                            </span>
                        </div>
                    </Card>
        )
    }
};

export default Form.createForm()(Demo3);
