import React from 'react';
import Item from './right/item';
import ItemDescriptionParagraph from './right/item-description-paragraph'
import ItemDescriptionBadges from './right/item-description-badge'
import ItemJob from './right/item-job'

class Right extends React.Component {
    render() {
        return  <div className="right col-md-8">
                    <Item itemClass="professional-description" title="Who am I?">
                        <ItemDescriptionParagraph descriptions={[
                            "An experienced professional with more than 10 years experience in " +
                            "the software development sector, with the last 6 years specializing " +
                            "in .NET applications development.",
                            "During this time I have covered a wide range of functions and responsibilities " +
                            "in the management of Projects and Teams.",
                            "I am accustomed to a handling a demanding work-load while working under pressure. " +
                            "I can manage effectively by establishing clear objectives and being results-oriented. " +
                            "I am looking for a project in which I can contribute to the organization with my software " +
                            "development experience improving the quality of the company applications enhancing my personal growth."
                        ]} />
                    </Item>
                    <Item itemClass="professional-skills" title="What I know about software development?">
                        <ItemDescriptionBadges items={[
                            {
                                title: 'Front-end',
                                badges: [
                                    'HTML 5',
                                    'CSS 3',
                                    'Pure JavaScript',
                                    'jQuery',
                                    'React.js',
                                    'Backbone.js',
                                    'Knockout.js',
                                    'Require.js',
                                    'Bootstrap']
                            },
                            {
                                title: 'Back-end',
                                badges: [
                                    'Classic ASP',
                                    'ASP.Net',
                                    'ASP.Net MVC',
                                    'WCF',
                                    'Node.js',
                                    'Ruby',
                                    'Objective C']
                            },
                            {
                                title: 'Desktop',
                                badges: [
                                    'Windows Forms',
                                    'WPF'
                                ]
                            },
                            {
                                title: 'Databases',
                                badges: [
                                    'SQL Server 2008+',
                                    'Entity Framework',
                                    'LINQ',
                                    'Lambda expressions',
                                    'Mongo DB',
                                    'SQL lite']
                            },
                            {
                                title: 'Versioning control',
                                badges: [
                                    'Team Foundation Server (TFS)',
                                    'Git',
                                    'SVN']
                            },
                            {
                                title: 'Continuous integration',
                                badges: [
                                    'Jenkins']
                            },
                            {
                                title: 'Unit testing',
                                badges: [
                                    'Rhino mocks']
                            },
                            {
                                title: 'Dependencies injection',
                                badges: [
                                    'Unity']
                            },
                            {
                                title: 'Cloud',
                                badges: [
                                    'AWS', 'Heroku']
                            }
                            ]} />
                    </Item>
                    <Item itemClass="jobs" title="My career path">
                        <ItemJob imageName="infojobs.jpg"
                                 companyDescription="Job at ePreselec area, dedicated to develope
                                 software that manages the curriculums of different companies,
                                 property of Infojobs (Schibsted Spain)"
                                 position="Senior Developer"
                                 jobDescription="6-person Scrum team member. Dedicated to maintain
                                 VisualBasic console applications, Classic ASP, ASP.Net MVC, ASP.Net web applications.
                                 Dedicated new software development in some technologies like ASP.Net MVC, Java, PHP,
                                 Node.JS deployed on cloud using AWS architecture.
"
                                 skills={['Classic ASP', 'ASP.NET', 'ASP.Net MVC', 'SQL Server 2008', 'Mongo DB',
                                     'Entity Framework', 'Lambda Expressions', 'PHP', 'Node.JS', 'HTML 5',
                                     'CSS 3', 'Pure Javascript', 'jQuery', 'React.JS', 'Backbone.JS', 'Bootstrap',
                                     'AWS', 'TFS', 'Git', 'Jenkins', 'Rhino mocks', 'Unity']} />

                        <hr />
                        <ItemJob imageName="infoempleo.jpg"
                                 companyDescription="Job at ePreselec area, dedicated to
                                 software development that manages the curriculums of different companies,
                                 property of Infoempleo"
                                 position="Senior Developer"
                                 jobDescription="Member of a team dedicated to maintain Classic ASP applications
                                 and to the new software development using ASP.Net."
                                 skills={['Classic ASP', 'ASP.NET', 'SQL Server 2008', 'Entity Framework',
                                     'Lambda Expressions', 'Pure Javascript', 'jQuery', 'TFS']}/>
                        <hr />
                        <ItemJob imageName="habber.jpg"
                                 companyDescription="IT consultancy, job in internal projects and at ePreselec (Infoempleo.com)"
                                 position="Senior Developer"
                                 jobDescription="Fully focused on developing the SWI Crawler UI using Pure Javascript,
                                 jQuery and Backbone.js"
                                 skills={['ASP.NET', 'ASP.Net MVC', 'SQL Server 2008', 'Entity Framework',
                                     'Lambda Expressions', 'HTML 5',
                                     'CSS 3', 'Pure Javascript', 'jQuery', 'Backbone.JS', 'Bootstrap', 'SVN']}/>
                        <hr />
                        <ItemJob imageName="nutapps.jpg"
                                 companyDescription="Customer’s custom mobile applications development company."
                                 position="Co-Founder, Head of Development Area"
                                 jobDescription="Review of availability customers requests, creating MVP of
                                 the projects to can give to client using Objective C,
                                 Java Android and other backend technologies."
                                 skills={['Objective C', 'Java Android', 'Cocos 2D', 'SQL Lite', 'Node.JS', 'Mongo DB']}/>
                        <hr />
                        <ItemJob imageName="tfs.jpg"
                                 companyDescription="Company dedicated to developing
                                 GIS software"
                                 position="Junior / Senior Developer"
                                 jobDescription="Development of several GIs applications such as Cloud-Mapping, unoGIS,
                                 Inkolan or unoBRA using the following frameworks ASP.Net, WPF, WCF, ASP.Net MVC."
                                 skills={['ASP.NET', 'ASP.Net MVC', 'Windows Forms', 'WPF', 'WCF', 'SQL Server 2008', 'Entity Framework',
                                     'Lambda Expressions', 'TFS', 'HTML 5', 'CSS 3', 'Pure JavaScript',
                                     'jQuery', 'Backbone.js']}/>
                    </Item>
                </div>
    }
}

export default Right;