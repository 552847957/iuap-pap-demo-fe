/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import PapReferOrg from 'pap-refer/lib/pap-ref-org/src/index';
// import 'pap-refer/lib/pap-ref-org.css';
import { Button, Form } from 'tinper-bee';
import Card from '../Card'
let code =
  `

import React, { Component } from 'react';
import PapReferOrg from 'pap-refer/lib/pap-ref-org';
import 'pap-refer/lib/pap-ref-org.css';
import { Button, Form } from 'tinper-bee';
import Card from '../Card'
class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }

  }
  render() {

    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <Card
        title={this.props.intl.formatMessage({id:"js.Ref.Ref4.0001", defaultMessage:"基础示例"})}
        codeText={code}
        intl={this.props.intl}
        footer={
          <Button colors="primary"
            style={{
              margin: 'auto 5px',
              height: '30px',
              padding: '0px'
            }}
            onClick={() => {
              this.props.form.validateFields((err, values) => {
                if (err) return;
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref4.0002", defaultMessage:"您选择的是"})+JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref4.0003" defaultMessage="提交" />
          </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref4.0004" defaultMessage="单选（组织）：" /></span>
          <PapReferOrg
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            nodeDisplay='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme}
            emptyBut={true}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref4.0005" defaultMessage="提示：请选择组织" />,
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
          />
        </div>
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref4.0006" defaultMessage="多选（组织）：" /></span>
          <PapReferOrg
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            nodeDisplay='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme} emptyBut={true}
            {...getFieldProps('code2', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref4.0005" defaultMessage="提示：请选择组织" />,
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
          />
        </div>
      </Card>
    )
  }
};
`
class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }

  }
  render() {

    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <Card
        title={this.props.intl.formatMessage({id:"js.Ref.Ref4.0001", defaultMessage:"基础示例"})}
        codeText={code}
        intl={this.props.intl}
        footer={
          <Button colors="primary"
            style={{
              margin: 'auto 5px',
              height: '30px',
              padding: '0px'
            }}
            onClick={() => {
              this.props.form.validateFields((err, values) => {
                if (err) return;
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref4.0002", defaultMessage:"您选择的是"})+JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref4.0003" defaultMessage="提交" />
          </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref4.0004" defaultMessage="单选（组织）：" /></span>
          <PapReferOrg
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            nodeDisplay='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme}
            emptyBut={true}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref4.0005" defaultMessage="提示：请选择组织" />,
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
          <span ><FormattedMessage id="js.Ref.Ref4.0006" defaultMessage="多选（组织）：" /></span>
          <PapReferOrg
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            nodeDisplay='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme} 
            emptyBut={true}
            {...getFieldProps('code2', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref4.0005" defaultMessage="提示：请选择组织" />,
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            
          />
          <span style={{
            color: 'red'
          }}>
            {
              getFieldError('code2')
            }
          </span>
        </div>
      </Card>
    )
  }
};

export default Form.createForm()(Demo1);