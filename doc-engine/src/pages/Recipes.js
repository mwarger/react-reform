import React from 'react'
import {Scaffold, H1, H2, H3, SubH1, Code, P, Section, AppliedCode} from 'comps/layouts'

export default class Examples extends React.Component {

  render() {

    return (
      <Scaffold>
        <H1 mb1>Recipes</H1>
        <SubH1>See some typical patterns in action</SubH1>
        <Section>
          <H2 id="required-with-stars">Add a <Code.Inline>*</Code.Inline> to all required fields</H2>
          <P>When rendering a field, see if there's a validation with <Code.Inline>name === 'required'</Code.Inline>:</P>
          <Code>{require('raw!comps/recipes/required-with-stars')}</Code>
          <AppliedCode comp={require('babel!comps/recipes/required-with-stars').default}/>
        </Section>
        <Section>
          <H2 id="custom-button-text">Custom button text</H2>
          <P>Look at the <Code.Inline>directProps</Code.Inline> passed to the <Code.Inline>Form</Code.Inline> and filter out a <Code.Inline>buttonLabel</Code.Inline> prop:</P>
          <Code>{require('raw!comps/recipes/custom-button-text')}</Code>
          <AppliedCode comp={require('babel!comps/recipes/custom-button-text').default}/>
        </Section>
        <Section>
          <H2 id="multiple-submit">Multiple submit buttons</H2>
          <H3>Approach 1: Create a theme</H3>
          <P>
            If it's a recurring feature within your application it may be worth creating a explicit theme for this.
            <Code.Inline>renderForm</Code.Inline> offers a <Code.Inline>submitForm</Code.Inline> callback which allows you to pass additional arguments to the <Code.Inline>onSubmit</Code.Inline> handler:
          </P>
          <Code>{require('raw!comps/recipes/multiple-submit-theme')}</Code>
          <AppliedCode comp={require('babel!comps/recipes/multiple-submit-theme').default}/>
          <H3>Approach 2: Create a custom handler in your form</H3>
          <P>
            Here we're creating a theme that allows to have no button by default. So instead we're passing our own buttons to the form.
            The second button is our <Code.Inline>submit</Code.Inline> button and will execute the default <Code.Inline>onSubmit</Code.Inline> handler.
            The first button gets an <Code.Inline>onClick</Code.Inline> handler which calls <Code.Inline>handleSubmit</Code.Inline> on the form's <Code.Inline>ref</Code.Inline>.
            This function expects an event as an argument. Instead of this, we just pass a string signaling to the submit handler that this is a special case.
          </P>
          <P>Calling <Code.Inline>handleSubmit</Code.Inline> will perform all validation checks, so your <Code.Inline>onSubmit</Code.Inline> won't be called if there's still invalid data.</P>
          <Code>{require('raw!comps/recipes/multiple-submit-inline')}</Code>
          <AppliedCode comp={require('babel!comps/recipes/multiple-submit-inline').default}/>
        </Section>
        <Section>
          <H2 id="submit-on-blur">Submit on blur</H2>
          <P><Code.Inline>submitForm</Code.Inline> is also available in the <Code.Inline>renderField</Code.Inline> function. This can be called when the input is blurred.</P>
          <P>There's a special case here. When validation fails, React Reform focusses the first invalid field by default. In our submit-on-blur case however, this would result in focussing the field immediately blurring if there's an validation error. This behaviour can be skipped via setting <Code.Inline>dontFocusAfterFail</Code.Inline> on the field.</P>
          <Code>{require('raw!comps/recipes/submit-on-blur')}</Code>
          <AppliedCode comp={require('babel!comps/recipes/submit-on-blur').default}/>
        </Section>
        <Section>
          <H2 id="dynamic-fields">Dynamic fields</H2>
          <P>When using a <b>controlled form</b> you can render your form using different fields or validation rules:</P>
          <Code>{require('raw!comps/recipes/dynamic-fields')}</Code>
          <AppliedCode comp={require('babel!comps/recipes/dynamic-fields').default}/>
        </Section>
      </Scaffold>
    )
  }
}
