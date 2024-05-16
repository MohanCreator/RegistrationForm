import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    fn: '',
    ln: '',
    register: true,
    erfn: '',
    erln: '',
  }

  onSubmit = event => {
    event.preventDefault()
    const {fn, ln} = this.state
    if (fn === '' && ln === '') {
      this.setState({erfn: 'Required', erln: 'Required'})
    } else if (fn === '') {
      this.setState({erfn: 'Required'})
    } else if (ln === '') {
      this.setState({erln: 'Required'})
    } else {
      this.setState({register: false})
    }
  }

  returnHome = () => {
    this.setState({register: true, fn: '', ln: ''})
  }

  saveFN = event => {
    if (event.target.value !== '') {
      this.setState({fn: event.target.value, erfn: ''})
    } else {
      this.setState({erfn: 'Required'})
    }
  }

  saveLN = event => {
    if (event.target.value !== '') {
      this.setState({ln: event.target.value, erln: ''})
    } else {
      this.setState({erln: 'Required'})
    }
  }

  blurFN = event => {
    if (event.target.value === '') {
      this.setState({erfn: 'Required'})
    } else {
      this.setState({erfn: ''})
    }
  }

  blurLN = event => {
    if (event.target.value === '') {
      this.setState({erln: 'Required'})
    } else {
      this.setState({erln: ''})
    }
  }

  render() {
    const {register, erfn, erln, fn, ln} = this.state
    return (
      <div className="registrationFormContainer">
        <h1 className="heading">Registration</h1>
        {register ? (
          <form onSubmit={this.onSubmit} className="form-container">
            <div className="input-container">
              <label className="name" htmlFor="firstName">
                FIRST NAME
              </label>
              <input
                className="input"
                value={fn}
                onChange={this.saveFN}
                onBlur={this.blurFN}
                id="firstName"
                type="text"
                placeholder="First Name"
              />
              <p className="error">{erfn}</p>
            </div>
            <div className="input-container">
              <label className="name" htmlFor="lastName">
                LAST NAME
              </label>
              <input
                className="input"
                value={ln}
                onBlur={this.blurLN}
                onChange={this.saveLN}
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
              <p className="error">{erln}</p>
            </div>
            <button type="submit" className="but">
              Submit
            </button>
          </form>
        ) : (
          <div className="successContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button className="but" onClick={this.returnHome} type="button">
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
