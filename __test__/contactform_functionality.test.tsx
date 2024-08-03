import { expect, test, describe, beforeEach, assert } from 'vitest'
import { cleanup, render } from '@testing-library/react';
import * as matchers from "@testing-library/dom";
import React, { act } from 'react';
import Contact from '../src/components/contact/Contact'
import { formDataEmpty } from './data.mts';
import { sleep } from '../src/utils.mts';
import userEvent from '@testing-library/user-event'
import { prepareForm } from './contactform_validation.test';

/* Prepare test functions */

const prepareContact = () => {
  let { container } = render(<Contact />)
  let form = document.getElementById('contact_form')
  let submitButton = matchers.getByTitle(container, 'Send form') as HTMLButtonElement | null
  if (!form || !submitButton) assert.fail('prepare contact failed')
  return { container, form, submitButton }
}

/* Functionality tests */

describe('- Form functionality -', () => {

  beforeEach(() => cleanup())

  test('on formdata.type === Individual: input "state" shown', () => {
    const { container } = prepareForm({ ...formDataEmpty, type: 'Individual' })
    let a = matchers.queryByLabelText(container, 'Your state') as HTMLSelectElement | null
    expect(a === null).toBeFalsy()
  })

  test('on formdata.type === Company: input "EIN" shown', () => {
    const { container } = prepareForm({ ...formDataEmpty, type: 'Company' })
    let select = matchers.queryByLabelText(container, 'Company EIN') as HTMLSelectElement | null
    expect(select === null).toBeFalsy()
  })

  test('on formdata.type === Individual: labels change', () => {
    const { form } = prepareContact()
    expect(
      (form as HTMLFormElement).innerHTML.includes('Your name') &&
      (form as HTMLFormElement).innerHTML.includes('Your email')
    ).toBeTruthy()
  })

  test('on formdata.type === Company: labels change', async () => {
    const { container, form } = prepareContact()
    let select = matchers.queryByLabelText(container, 'Entity') as HTMLSelectElement | null
    if (select === null) assert.fail('select not found')
    await userEvent.selectOptions(select, 'Company')
    expect(
      (form as HTMLFormElement).innerHTML.includes('Company name') &&
      (form as HTMLFormElement).innerHTML.includes('Company email')
    ).toBeTruthy()
  })

  test('on formdata.type === Individual: placeholders change', () => {
    const { form } = prepareContact()
    expect(
      (form as HTMLFormElement).innerHTML.includes('Emma Carter') &&
      (form as HTMLFormElement).innerHTML.includes('carter_emma_1995@gmail.com') &&
      (form as HTMLFormElement).innerHTML.includes('Hello! I wanted to find out how to buy with virtual wallets...')
    ).toBeTruthy()
  })

  test('on formdata.type === Company: placeholders change', async () => {
    const { form, container } = prepareContact()
    let select = matchers.queryByLabelText(container, 'Entity') as HTMLSelectElement | null
    if (select === null) assert.fail('select not found')
    await userEvent.selectOptions(select, 'Company')
    expect(
      (form as HTMLFormElement).innerHTML.includes('Starbridge Innovations Inc.') &&
      (form as HTMLFormElement).innerHTML.includes('starbridge@building.en') &&
      (form as HTMLFormElement).innerHTML.includes('We would like to contact you to propose a new business')
    ).toBeTruthy()
  })

  test('on form valid submit: reset inputs', async () => {
    const { form } = prepareContact()
    let nameInput = matchers.getByLabelText(form, 'Your name') as HTMLInputElement
    let emailInput = matchers.getByLabelText(form, 'Your email') as HTMLInputElement
    let messageTextArea = matchers.getByLabelText(form, 'Message') as HTMLTextAreaElement
    userEvent.type(nameInput, 'Nicolas')
    userEvent.type(emailInput, 'jorgeb.dev.acc@gmail.com')
    userEvent.type(messageTextArea, 'Hello! I wanted to find out how to buy with virtual wallets...')
    userEvent.click(matchers.getByTitle(form, 'Send form'))
    await act(async () => {
      await sleep(5100)
      expect(
        nameInput.value === '' && emailInput.value === '' && messageTextArea.value === ''
      ).toBeTruthy()
    })
  }, { timeout: 5200 })
  
})