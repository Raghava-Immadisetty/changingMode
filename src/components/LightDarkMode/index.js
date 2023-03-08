import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {texts: 'Light Mode', property: 'Dark'}

  onChanging = () => {
    this.setState(prevState => {
      if (prevState.text === 'Light Mode') {
        return {
          text: 'Dark Mode',
          property: 'Light',
        }
      } else {
        return {
          text: 'Light Mode',
          property: 'Dark',
        }
      }
    })
  }

  render() {
    const {text, property} = this.state
    return (
      <div>
        <div className={property}>
          <h1>Click To Change Mode</h1>
          <div>
            <button onClick={this.onChanging}>{texts}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
