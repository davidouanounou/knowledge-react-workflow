import PropTypes from 'prop-types';
import styled from 'styled-components';

const sizes = {
    small:{
        fontSize: '12px',
        lineHeight: '16px',
    },
    medium: {
        fontSize: '14px',
        lineHeight: '18px',
    },
    large: {
        fontSize: '16px',
        lineHeight: '20px',
    }
}

const Label = styled.label`
    font-family: Roboto;
    font-weight: 400;
    font-size:  ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    text-transform: uppercase;
    padding-bottom: 8px;
`;

/* Will show the right 'tag' within documentation */
Label.displayName = 'Label';
Label.defaultProps = {
    size: 'medium'
};

Label.propTypes = {
 size: PropTypes.oneOf(['small', 'medium', 'large']),
 children: PropTypes.element.isRequired
};

export default Label;