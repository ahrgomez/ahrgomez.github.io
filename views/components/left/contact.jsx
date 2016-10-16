import React from 'react';

class Contact extends React.Component{

    render() {
        return  <div className="contact" title="See ahrgomez's github account">
                    <a className="git" href="htts://github.com/ahrgomez">
                        <i className="fa fa-github" />
                    </a>
                    <a className="linkedin" href="https://es.linkedin.com/in/alejandro-hernández-a056233b" title="See ahrgomez's linkedin CV">
                        <i className="fa fa-linkedin" />
                    </a>
                    <a className="mail" href="mailto:contact@ahrgomez.com" title="Send an email to ahrgomez">
                        <i className="fa fa-envelope" />
                    </a>
                </div>
    }
}

export default Contact;