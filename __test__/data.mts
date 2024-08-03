import { ContactFormData } from "../typedefinitions";

export const formDataFilled: ContactFormData = {
  type: 'Individual',
  state: 'COLORADO',
  name: 'Oscar Mezar',
  email: 'oscar@lacapital.com',
  message: 'hola que tal como estas'
}

export const formDataEmpty: ContactFormData = {
  type: 'Individual',
  state: 'COLORADO',
  name: '',
  email: '',
  message: ''
}
