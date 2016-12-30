webpackJsonp([10],{142:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o="/Users/danielberndt/workspace/react-reform/doc-engine/src/pages/GettingStarted.js",s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=n(2),u=r(m),f=n(22),c=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){return u.default.createElement(f.Scaffold,{__source:{fileName:o,lineNumber:9},__self:this},u.default.createElement(f.H1,{mb1:!0,__source:{fileName:o,lineNumber:10},__self:this},"Getting Started"),u.default.createElement(f.SubH1,{__source:{fileName:o,lineNumber:11},__self:this},"Learn about the essential pieces of React Reform"),u.default.createElement(f.Section,{__source:{fileName:o,lineNumber:12},__self:this},u.default.createElement(f.H2,{mb3:!0,__source:{fileName:o,lineNumber:13},__self:this},"Install"),u.default.createElement(f.P,{__source:{fileName:o,lineNumber:14},__self:this},"Add React Reform to your application via"),u.default.createElement(f.Code,{__source:{fileName:o,lineNumber:15},__self:this},"npm install react-reform")),u.default.createElement(f.Section,{__source:{fileName:o,lineNumber:17},__self:this},u.default.createElement(f.H2,{mb3:!0,__source:{fileName:o,lineNumber:18},__self:this},"Create your first theme"),u.default.createElement(f.P,{__source:{fileName:o,lineNumber:19},__self:this},"Use the ",u.default.createElement(f.Code.Inline,{__source:{fileName:o,lineNumber:19},__self:this},"createTheme")," method and define how your form body and each field should be rendered"),u.default.createElement(f.Code,{__source:{fileName:o,lineNumber:20},__self:this},"\n            import {createTheme} from 'react-reform'\n\n            const defautTheme = createTheme({\n\n              renderForm: (FormContainer, children, {directProps, isValid}) => (\n                <FormContainer\n                  style={{background: isValid ? 'green' : 'red', ...directProps.style}}\n                >\n                  <div>{children}</div>\n                  <button>{directProps.buttonLabel || 'Submit'}</button>\n                </FormContainer>\n              ),\n\n              renderField: (Field, {directProps, name, isFocused, validations, id}) => {\n                const errors = validations\n                  .filter(({isValid}) => isValid === false)\n                  .map(({errorMessage, name}) => <span key={name}>{errorMessage}, </span>)\n                return (\n                  <div>\n                    <label htmlFor={id}>\n                      {directProps.label || name}\n                      {!isFocused && errors}\n                    </label>\n                    <Field id={id}\n                      style={{background: isFocused ? 'lightgreen' : 'yellow'}}\n                      {...directProps}\n                    />\n                  </div>\n                )\n\n              },\n          ")),u.default.createElement(f.Section,{__source:{fileName:o,lineNumber:54},__self:this},u.default.createElement(f.H2,{mb3:!0,__source:{fileName:o,lineNumber:55},__self:this},"Create custom validations"),u.default.createElement(f.P,{__source:{fileName:o,lineNumber:56},__self:this},"Let's add a ",u.default.createElement(f.Code.Inline,{__source:{fileName:o,lineNumber:56},__self:this},"validTag")," validation to the default validations like e.g. ",u.default.createElement(f.Code.Inline,{__source:{fileName:o,lineNumber:56},__self:this},"required")," or ",u.default.createElement(f.Code.Inline,{__source:{fileName:o,lineNumber:56},__self:this},"maxlenght"),"."),u.default.createElement(f.Code,{__source:{fileName:o,lineNumber:57},__self:this},"\n            import defaultValidations from 'react-reform/opt/validations'\n\n            const validations = {\n              ...defaultValidations,\n\n              validTag: {\n                isValid: val => /#\\W+/.test(val),\n                errorMessage: val => `'${val}' is not a valid tag!`\n              }\n            }\n\n          ")),u.default.createElement(f.Section,{__source:{fileName:o,lineNumber:71},__self:this},u.default.createElement(f.H2,{mb3:!0,__source:{fileName:o,lineNumber:72},__self:this},"Make your app aware of your themes and validations"),u.default.createElement(f.P,{__source:{fileName:o,lineNumber:73},__self:this},"React Reform uses react's context to propagate what themes and validations you have enabled for your app."),u.default.createElement(f.P,{__source:{fileName:o,lineNumber:74},__self:this},"Therefore you need to wrap your root component with the ",u.default.createElement(f.Code.Inline,{__source:{fileName:o,lineNumber:74},__self:this},"<ReformContext>")," Component like so."),u.default.createElement(f.Code,{__source:{fileName:o,lineNumber:75},__self:this},"\n            import React, {Component} from 'react'\n            import {render} from 'react-dom'\n            import {ReformContext} from 'react-reform'\n\n            const themes = {default: defaultTheme};\n\n            class App extends Component {\n\n              render() {\n                return (\n                  <ReformContext themes={themes} validations={validations}>\n                    <div>\n                      ...Your App Code...\n                    </div>\n                  </ReformContext>\n                )\n              }\n            }\n\n            render(<App/>, document.getElementById('root'))\n          ")),u.default.createElement(f.Section,{__source:{fileName:o,lineNumber:99},__self:this},u.default.createElement(f.H2,{mb3:!0,__source:{fileName:o,lineNumber:100},__self:this},"Let's write our first form"),u.default.createElement(f.P,{__source:{fileName:o,lineNumber:101},__self:this},"Now that the basics are set up. Enjoy writing your forms with very little boilerplate!"),u.default.createElement(f.Code,{__source:{fileName:o,lineNumber:102},__self:this},"\n            import React, {Component} from 'react'\n            import {Form} from 'react-reform'\n            import {Text, Textarea} from 'react-reform/opt/inputs'\n\n            class TagForm extends Component {\n\n              handleSubmit = ({tag, description}) => {\n                ...\n              }\n\n              render() {\n                return (\n                  <div>\n                    <h2>Enter your tag information here</h2>\n                    <Form onSubmit={this.handleSubmit}>\n                      <Text name=\"tag\" is-required is-validTag/>\n                      <Textarea name=\"description\" label=\"Enter description\"/>\n                    </Form>\n                  </div>\n                )\n              }\n            }\n          ")))}}]),t}(u.default.Component);t.default=c}});
//# sourceMappingURL=10-973cd.chunk.js.map