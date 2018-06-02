import React, { PureComponent } from 'react'
import { hashHistory } from 'react-router'
import _ from 'lodash'
import connect from '../Helpers/connect'

import * as Core from '../../Actions/Core'
import * as Settings from '../../Actions/Settings'

import OnlyIf from '../../Elements/OnlyIf'

class RemixScreen extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main className="RemixScreen">
        <webview src="http://localhost:8082"/>
      </main>
    )
  }
}

export default connect(RemixScreen, "settings")
