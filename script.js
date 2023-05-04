const form = document.querySelector('.signup-form')
const emailInput = form.querySelector('#email')
const passwordInput = form.querySelector('#password')
const emailErrMsg = form.querySelector('#email-error')
const passwordErrMsg = form.querySelector('#password-error')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = emailInput.value
  const password = passwordInput.value

  if (!validateEmail(email)) {
    emailErrMsg.classList.add('active')

    setTimeout(() => {
      emailErrMsg.classList.remove('active')
    }, 6000)
    return
  }

  if (!validatePassword(password)) {
    passwordErrMsg.classList.add('active')

    setTimeout(() => {
      passwordErrMsg.classList.remove('active')
    }, 6000)
    return
  }

  form.submit()
})

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  return passwordRegex.test(password)
}
