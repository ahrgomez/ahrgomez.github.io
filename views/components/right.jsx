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
                            "An experienced professional with more than 8 years experience in the IT sector.",
                            "An experienced professional with more than 10 years experience in " +
                            "the software development sector, with the last 6 years specializing " +
                            "in .NET applications development.",
                            "During this time I have covered a wide range of functions and responsibilities " +
                            "in the management of Projects and Teams.",
                            "I am accustomed to a handling a demanding work-load while working under pressure. " +
                            "I can manage effectively by establishing clear objectives and being results-oriented. " +
                            "I am looking for a project in which I can contribute to the organization by expanding " +
                            "the business development area while enhancing my personal growth."
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
                            }
                            ]} />
                    </Item>
                    <Item itemClass="jobs" title="Where I worked?">
                        <ItemJob imageName="epreselec.jpg"
                                 companyDescription="Company dedicated to developing
                                 software that manages the curriculums of different companies" />
                        <hr />
                        <ItemJob imageName="infoempleo.jpg"
                                 companyDescription="Company dedicated to developing
                                 software that manages the curriculums of different companies" />
                    </Item>
                </div>
    }
}

export default Right;