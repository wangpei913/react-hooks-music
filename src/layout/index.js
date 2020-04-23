import React from 'react'

class LayoutIndex extends React.PureComponent {
    render () {
        const { children } = this.props
        return <React.Fragment>{children}</React.Fragment>
    }
}
export default LayoutIndex;