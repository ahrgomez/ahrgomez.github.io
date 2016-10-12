import React from 'react';
import ProfessionalDescription from './right/professional-description';
import ProfessionalSkills from './right/professional-skills';

class Right extends React.Component {
    render() {
        return  <div className="right col-md-8">
                    <ProfessionalDescription />
                    <ProfessionalSkills />
                </div>
    }
}

export default Right;