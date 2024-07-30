import * as yup from 'yup'

export const registerShemas = yup.object().shape({
    email: yup.string().email("Doğru email daxil edin").required('Zəhmət olmasa email daxil edin'),
    age: yup.number('Eded daxil edin').required('Zəhmət olmasa yaşınızı daxil edin').positive('Musbet eded daxil edin').integer('Tam eded daxil edin'),
    password: yup.string()
    .min(8,"min 8 element olmalidir")
    .max(50,"max 50 element ola biler")
    .required('Zəhmət olmasa password daxil edin'),
    confirmpassword: yup.string().required('Zəhmət olmasa password tekrar daxil edin')
    .oneOf([yup.ref('password',yup.password)],"Shifreler eyni deyil"),
    term: yup.boolean().required()
})