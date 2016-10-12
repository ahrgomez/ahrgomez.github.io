import React from 'react';

class Layout extends React.Component {
    render() {
        return <html>
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" type="text/css" href="/styles/main.css"/>
                <script src="/scripts/jquery.min.js"></script>
                <script src="/scripts/jquery-ui.min.js"></script>
            </head>
            <body>{this.props.children}</body>
        </html>
    }
}

module.exports = Layout;