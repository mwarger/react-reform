import React from 'react'
import ReactDOM from 'react-dom'
import {B, col} from 'comps/styles'
import {Link as RRLink} from 'react-router'
import StickyBox from 'react-sticky-box'
import {scrollTo} from 'lib/scroll'

export const md = (num) => `(max-width: ${num}px)`;

export const RawButton = ({onClick, to, href, disabled, type = to || href ? undefined : 'button', props, ...rest}) => (
  <B component={to ? RRLink : href ? 'a' : 'button'} props={{onClick, type, to, href, disabled, ...props}} {...rest} cursor="pointer"/>
)
export const PlainLink = ({href, to, target, props, nofollow, ...rest}) => (
  <B.I component={to ? RRLink : 'a'} props={{...props, to, href, target, rel: nofollow ? 'nofollow' : undefined}} transitionProperty="color" {...rest}/>
)
export const Link = (props) => (
  <PlainLink brand b hover={{color: col.darkBrand}} {...props}/>
)

export const BigButton = (props) => (
  <RawButton {...props}/>
)

export const Input = (props) => (
  <input type="text" {...props}/>
)

export const Scaffold = ({children}) => (
  <B.Row minHeight="100vh" media={[md(750), {flexDirection: 'column'}]}>
    <B.Col ph4 pv4 flex="200px 1 0" bgBrand paddingTop="11.7rem" alignItems="flex-end"
      media={[md(750), {padding: '1rem', flex: 'initial', alignItems: 'center'}]}
    >
      <Nav/>
    </B.Col>
    <B.Row pb4 ph5 flex="800px 4 1" pt6 minWidth="1px"
      media={[md(750), {padding: '2rem 1rem', flex: 'initial'}]}
    >
      <B.Col width="100%" maxWidth="800px" mha>
        {children}
        <Footer/>
      </B.Col>
    </B.Row>
  </B.Row>
)

const NavLink = ({to, onlyActiveOnIndex = false, ...rest}, {router}) => (
  <PlainLink white80 b mb4 tr f5 pr3 br bw2 lh-title
    hover={{color: col.white}}
    {...(to && (onlyActiveOnIndex ? router.isActive(to, true) : router.location.pathname.startsWith(to)) ? {to, white: true, 'b--white': true} : {to, 'b--transparent': true})}
    media={[md(750), {flexDirection: 'row', padding: '0.5rem 1rem', margin: 0, borderRightStyle: 'none', borderBottomStyle: 'solid', textAlign: 'center'}]}
    {...rest}
  />
)

NavLink.contextTypes = {router: React.PropTypes.object}

const NavSubLink = (props, {router}) => (
  <PlainLink white80 pv2 tr f6 pr3 br bw2 b--white30 transitionProperty="border-color, color"
    {...(router.location.pathname.startsWith(props.to) ? {'b--white': true, white: true} : {})}
    hover={{color: col.white, borderColor: col.white90}} {...props}
  />
)

NavSubLink.contextTypes = {router: React.PropTypes.object}

export const Nav = (props, {router}) => (
  <StickyBox width="measure">
    <B.Col pt5 media={[md(750), {flexDirection: 'row', padding: 0, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}]}>
      <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
      <NavLink to="/getting-started/">Getting Started</NavLink>
      <NavLink to="/recipes/"
        {...(router.isActive('/recipes/') ? {mb0: true, pb3: true} : {})}
      >Recipes</NavLink>
      {router.isActive('/recipes/') && (
        <B.Col mb2 media={[md(750), {display: 'none'}]}>
          <NavSubLink to="/recipes/#required-with-stars">Add a <Code.Inline>*</Code.Inline> to all required fields</NavSubLink>
          <NavSubLink to="/recipes/#custom-button-text">Custom button text</NavSubLink>
          <NavSubLink to="/recipes/#multiple-submit">Multiple submit buttons</NavSubLink>
          <NavSubLink to="/recipes/#submit-on-blur">Submit on blur</NavSubLink>
          <NavSubLink to="/recipes/#dynamic-fields">Dynamic fields</NavSubLink>
        </B.Col>
      )}
      <NavLink to="/docs/"
        {...(router.location.pathname.startsWith('/docs/') ? {mb0: true, pb3: true} : {})}
      >Api Docs</NavLink>
      {router.location.pathname.startsWith('/docs/') && (
        <B.Col mb2 media={[md(750), {display: 'none'}]}>
          <NavSubLink to="/docs/reform-context/">ReformContext</NavSubLink>
          <NavSubLink to="/docs/themes/">Themes</NavSubLink>
          <NavSubLink to="/docs/validations/">Validations</NavSubLink>
          <NavSubLink to="/docs/wrap-input/">WrapInput</NavSubLink>
          <NavSubLink to="/docs/form/">Form</NavSubLink>
          <NavSubLink to="/docs/optional/">Optional validations and inputs</NavSubLink>
        </B.Col>
      )}
      <NavLink href="https://github.com/codecks-io/react-reform" f6 mt4>
        <B.I select={[' svg', {width: 18, height: 18, fill: "currentColor", position: "relative", top: 3}]} props={{dangerouslySetInnerHTML: {__html: require("./github.svg?inline")}}}/> GitHub Repo
      </NavLink>
    </B.Col>
  </StickyBox>
)

Nav.contextTypes = {router: React.PropTypes.object}

export const Footer = () => (
  <B black40 mta pt5 f6>
    React Reform is brought to you by <Link black60 href="https://www.codecks.io">Codecks</Link>.
    Suggest edits for these pages on <Link black60 href="https://github.com/codecks-io/react-reform/tree/master/doc-engine/src/pages">GitHub</Link>
  </B>
)

export const H1 = (props) => <B component="h1" f3 b black80 lh-title {...props}/>
export const SubH1 = (props) => <B f5 lh-title black60 mb5 {...props}/>

export const H2 = class extends React.Component {

  static contextTypes = {router: React.PropTypes.object}

  constructor(props, context) {
    super(props)
    this.lastHash = null
  }

  componentDidMount() {
    this.respondToHash()
  }

  componentDidUpdate() {
    this.respondToHash()
  }

  respondToHash() {
    const {hash} = this.context.router.location
    if (this.lastHash === hash || !this.props.id) return
    this.lastHash = hash
    if (hash === `#${this.props.id}`) {
      const node = ReactDOM.findDOMNode(this)
      setTimeout(() => scrollTo(node.getBoundingClientRect().top + window.scrollY), 10)
    }
  }

  render() {
    return <B component="h2" f4 b black80 lh-title mb3 ref={n => this.node = n} {...this.props}/>
  }
}
export const H3 = (props) => <B component="h3" f5 b black80 lh-title mb3 {...props}/>

export const Section = (props) => <B component="section" mb6 {...props}/>
export const P = (props) => <B component="p" mb3 f5 black80 lh-copy {...props}/>

export const List = (props) => <B component="ul" mb4 media={[md(750), {paddingLeft: '1rem'}]} {...props}/>
List.Item = (props) => <B component="li" display="list-item" mb2 lh-copy black80 {...props}/>

const stripLines = (text) => {
  const lines = text.split('\n')
  const minPad = lines
    .filter(line => /\S+/.test(line))
    .reduce((m, line) => Math.min(line.match(/^(\s*)/)[1].length, m), Infinity)
  return lines
    .map(line => /\S+/.test(line) ? line.slice(minPad) : line)
    .join('\n').trim()
}

let isPrismCssRequired = false

export class Code extends React.Component {

  state = {
    prismd: null
  }

  componentDidMount() {
    if (typeof this.props.children !== 'string') return
    if (!__SERVERRENDER__) {
      require.ensure(['prismjs', 'prismjs/themes/prism.css', 'prismjs/components/prism-jsx.js'], () => {
        const Prism = require('prismjs')
        if (!isPrismCssRequired) {
          require('prismjs/themes/prism.css')
          require('prismjs/components/prism-jsx.js')
          isPrismCssRequired = true
        }
        this.setState({prismd: Prism.highlight(stripLines(this.props.children), Prism.languages.jsx)})
      }, 'prismjs')
    }
  }

  render() {
    const {children: rawChildren, ...rest} = this.props
    const {prismd} = this.state
    const children = prismd
      ? <code dangerouslySetInnerHTML={{__html: prismd}}/>
      : <code>{typeof rawChildren === 'string' ? stripLines(rawChildren) : rawChildren}</code>
    return (
      <B component="pre" mb4 ph3 pv2 marginLeft="-1rem" marginRight="-1rem" bgBlack05 black70 f6 lh-copy overflowX="auto"
        media={[md(750), {fontSize: '0.7rem', lineHeight: 1.75}]}
       {...rest}>
        {children}
      </B>
    )
  }
}

Code.Inline = (props) => <B.I component="code" display="inline" ph1 bgBlack05 {...props}/>

export const AppliedCode = ({comp: Comp}) => (
  <B mb4>
    <H3 mb4>See it in action</H3>
    <B ph3 pv3 marginLeft="-1rem" marginRight="-1rem" bgWashedGreen black70 maxWidth="100%" overflowX="auto" mb2><Comp/></B>
    <B f6 black50>Check your console to see the submitted value</B>
  </B>
)
