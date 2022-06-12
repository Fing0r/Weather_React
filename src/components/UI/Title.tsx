import PropTypes from 'prop-types';

interface ITitle {
    hLevel: string
    title: string
    className: string
}

function Title({hLevel, title, className}: ITitle) {
    const CustomTag = `h${hLevel}`;

    return(
        <CustomTag className={className || "title"}>
            {title}
        </CustomTag>
    )
}
// Title.propTypes = {
//     Tag: PropTypes.string.isRequired,
//     className: PropTypes.string,
//     title: PropTypes.string.isRequired
// }

export default Title
