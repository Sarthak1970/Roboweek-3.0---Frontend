import PropTypes from 'prop-types';

const Button = ({ text, textSize = 'text-lg', iconLink, onClick, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || text}
      className="relative p-1 text-white font-semibold rounded-full 
                 bg-gradient-to-b from-pink-400/50 to-pink-400/20
                 hover:from-pink-400/40 hover:to-pink-400/20
                 backdrop-blur-lg border border-pink-400/30
                 transition-all duration-300 shadow-lg shadow-pink-500/20
                 hover:shadow-pink-500/40 hover:shadow-md"
      type="button"
    >
      <div className={`flex items-center gap-2 px-5 py-3 bg-black/30 rounded-full backdrop-blur-md ${textSize}`}>
        {text} {iconLink}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
      </div>
    </button>
  );
};


Button.propTypes = {
  text: PropTypes.string.isRequired,
  textSize: PropTypes.string,
  iconLink: PropTypes.node,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

export default Button;
