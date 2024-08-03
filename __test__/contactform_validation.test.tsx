import { expect, test, describe, beforeEach, vi, assert } from 'vitest'
import { cleanup, render } from '@testing-library/react';
import * as matchers from "@testing-library/dom";
import React, { act } from 'react';
import { ContactFormData } from '../typedefinitions';
import ContactForm from '../src/components/contact/ContactForm'
import { formDataFilled, formDataEmpty } from './data.mts';
import { sleep } from '../src/utils.mts';

/* Prepare test functions */

export const prepareForm = (data: ContactFormData) => {
  let { container } = render(<ContactForm formData={data} execFormAction={vi.fn()} />)
  let form = document.getElementById('contact_form') as HTMLFormElement | null
  if (form === null) assert.fail('form element not found')
  let submitButton = matchers.getByTitle(container, 'Send form') as HTMLButtonElement | null
  if (submitButton === null) assert.fail('button element not found')
  return { form, submitButton, container }
}

/* Validation test */

describe('- Form validation -', async () => {

  beforeEach(() => cleanup())

  test('should be invalid: all fields empty', () => {
    const { form, submitButton } = prepareForm(formDataEmpty)
    matchers.fireEvent.click(submitButton)
    expect(form.checkValidity()).toBeFalsy()
  })

  test('should be invalid: name field empty', () => {
    const { form, submitButton } = prepareForm({ ...formDataFilled, name: '' })
    matchers.fireEvent.click(submitButton)
    expect(form.checkValidity()).toBeFalsy()
  })

  test('should be invalid: name email empty', () => {
    const { form, submitButton } = prepareForm({ ...formDataFilled, email: '' })
    matchers.fireEvent.click(submitButton)
    expect(form.checkValidity()).toBeFalsy()
  })

  test('should be invalid: name message empty', () => {
    const { form, submitButton } = prepareForm({ ...formDataFilled, message: '' })
    matchers.fireEvent.click(submitButton)
    expect(form.checkValidity()).toBeFalsy()
  })

  test('should be invalid: email malformed', () => {
    const { form, submitButton } = prepareForm({ ...formDataFilled, email: 'www.oscarlacapital.com' })
    matchers.fireEvent.click(submitButton)
    expect(form.checkValidity()).toBeFalsy()
  })

  test('should be invalid: EIN malformed', () => {
    const { form, submitButton } = prepareForm({ ...formDataFilled, type: 'Company', ein: '123-4567890' })
    matchers.fireEvent.click(submitButton)
    expect(form.checkValidity()).toBeFalsy()
  })

  test('should be invalid: message malformed', async () => {
    const { submitButton, container } = prepareForm({ ...formDataFilled, message: '  esto es un mensaje                     ' })
    let txtarea = matchers.getByLabelText(container, 'Message') as HTMLTextAreaElement | null
    await act(async () => {
      matchers.fireEvent.click(submitButton)
      await sleep(2100)
    })
    expect(txtarea?.textContent === '').toBeFalsy()
  })
})

